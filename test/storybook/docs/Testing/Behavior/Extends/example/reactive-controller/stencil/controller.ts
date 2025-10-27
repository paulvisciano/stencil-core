/**
 * Proposed reactive controller primitives for Stencil (illustrative only).
 * This shows how a `@Controller` property decorator could mark controller
 * instances for lifecycle & update integration with a component host.
 */

export interface StencilReactiveController {
  /** Called when the component is connected */
  hostConnected?(): void;
  /** Called when the component is disconnected */
  hostDisconnected?(): void;
  /** Optional hook for host assignment if needed */
  setHost?(host: StencilReactiveControllerHost): void;
}

export interface StencilReactiveControllerHost {
  requestUpdate(): void;
}

// Symbol to store metadata list of decorated controller property names
const CONTROLLERS_META = Symbol('stencil:controllers');

export function Controller(): PropertyDecorator {
  return (proto: any, propKey: string | symbol) => {
    const list: (string | symbol)[] = proto[CONTROLLERS_META] ||= [];
    if (!list.includes(propKey)) list.push(propKey);
  };
}

/** Utility to fetch controller property keys from an instance */
export function getControllerKeys(instance: any): (string | symbol)[] {
  return instance && instance[CONTROLLERS_META] ? [...instance[CONTROLLERS_META]] : [];
}
