import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { OrchestratorService } from '@app/orchestrator';

const orchestratorServiceProvider = {
  provide: OrchestratorService,
  useClass: OrchestratorService,
};

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, Logger, orchestratorServiceProvider],
})
export class AppModule {}
