import { forwardRef, Module } from '@nestjs/common';
import { RedisRepository } from './redis.repository';
import { redisClientFactory } from './redis.factory';

@Module({
  exports: [RedisRepository],
  providers: [redisClientFactory, RedisRepository],
})
export class RedisModule {}
