import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    OButton: typeof components.Button;
  }
}
export {};