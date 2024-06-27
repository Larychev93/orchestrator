import {
  Inject,
  Injectable,
  OnModuleDestroy,
} from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class RedisRepository implements OnModuleDestroy {
  constructor(
    @Inject('RedisClient') private readonly redisClient: Redis,
  ) {}

  onModuleDestroy(): void {
    this.destroy();
  }

  async get(key: string): Promise<string | null> {
    return this.redisClient.get(key);
  }

  async set(key: string, value: string): Promise<any> {
    return this.redisClient.set(key, JSON.stringify(value));
  }

  async delete(key: string): Promise<void> {
    await this.redisClient.del(key);
  }

  destroy(): void {
    this.redisClient.disconnect();
  }

  async setWithExpiry(
    key: string,
    value: string,
    expiry: number,
  ): Promise<void> {
    await this.redisClient.set(`${key}`, value, 'EX', expiry);
  }
}
