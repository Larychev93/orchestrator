import { Injectable, OnModuleInit } from '@nestjs/common';
import { OrchestratorService } from '@app/orchestrator';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private orchestratorService: OrchestratorService) {}

  getHello(): string {
    return 'Hello World!';
  }

  onModuleInit(): any {
    this.orchestratorService.init();
  }
}
