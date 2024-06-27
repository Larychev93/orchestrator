export const redisConfig = {
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT, 10),
  password: process.env.REDIS_PASSWORD,
};

/* eslint-disable */
const systemSchedulerState = {
  modules: {
    idModule1: {
      activeJobs: [1, 2, 3]
    },
    idModule2: {
      activeJobs: [1]
    }
  }
}

//class Redis {
//  static setMessage(key, value) {}
//}
//
//const firstMessage = { module: 'AlgoModule', id: 1,  action: 'parseVin', payload: {} };
//const secondMessage = { module: 'UploaderModule', id: 3,  action: 'addMedia', payload: {} };
//
//new App().controllerPost(firstMessage);
//
//class App {
//  orchestrator = null;
//
//  constructor() {
//    this.orchestrator = new Orchestrator();
//  }
//
//  controllerPost(message) {
//   this.orchestrator.addMessage(message)
//  }
//}
//
//class Composite {
//  state = ModuleStateEnum.READY
//  services: []
//
//  prcoessDF(calls, output) {
//    /**
//     * call API
//     */
//
//    const result = calls.forEach(service => service.call())
//
//
//  }
//}
//
//class Orchestrator {
//  redisConnection = null
//  modules: any[];
//  composite = new Composite()
//
//  constructor(config) {
//    this.redisConnection = new Redis();
//
//    this.initModules(config);
//  }
//
//  initModules(config) {
//    /**
//     * init all modules
//     */
//    config.modules.forEach(module => {
//      this.modules.push(module)
//    })
//  }
//
//  addMessage(message, module) {
//    this.modules[module].aggregator.registerMessage(this.redisConnection, message)
//  }
//}
//
//class Aggregator {
//  static registerMessage(redisClient, message) {
//    const DEFAULT_STATE = 'current'
//    /**
//     * Get key
//     */
//    const { module, id } = message;
//
//    const key = `${module}-${id}`;
//
//    redisClient.set(key, { ...message, state: DEFAULT_STATE })
//  }
//}
//
//enum ModuleStateEnum {
//  PROCESSING,
//  IN_ACTIVE,
//  READY
//}
//
//
//class AlgoModule {
//  state = ModuleStateEnum.READY
//}
//
//interface IModule {
//  name: string;
//  state: {}
//  actions: {}
//  df: () => {}
//  config: {}
//}
//
//class UploaderModule {
//  state = ModuleStateEnum.READY
//}
//
//interface IModelMessage {
//  message: {};
//  key: string;
//  state: string;
//}
//
//const moduleState = {
//  state: ModuleStateEnum.READY,
//  messages: [],
//}
//
//const df = () => {}

/**
 * orchestrator => message (media uploaded, module: UploadeModule, pol: tenant1) =>
 * call module UploadeModule => module UploadeModule => call action Try Read S3 => df calls Service to call S3 =>
 * df recieved response S3 => put to aggregator message
 * put to Redis =>
 */
