import { Logger, Module, OnModuleInit } from '@nestjs/common';

@Module({
  providers: [Logger],
})
export class ConfigurationModule implements OnModuleInit {
  constructor(private readonly logger: Logger) {}
  onModuleInit(): any {
    this.logger.log('Need to fetch config');
  }
}
