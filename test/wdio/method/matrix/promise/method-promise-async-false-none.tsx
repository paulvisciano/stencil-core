// filepath: /Users/paul.visciano/repos/core/test/wdio/method/matrix/promise/method-promise-async-false-none.tsx
import { Component, h, Method, State } from '@stencil/core';

@Component({ tag: 'method-promise-async-false-none', shadow: true })
export class MethodPromiseAsyncFalseNone {
  @State() value = 0;

  @Method() run() {
    return new Promise(resolve => setTimeout(() => resolve(x ?? 1), 0));
  }

  async componentDidLoad() {
    const host = this.host as any;
    const result = await (host as any).run();
    if (typeof result === 'number') this.value = result; else this.value++;
  }

  private get host() { return (this as any).el || (this as any).$host$ || this as any; }

  render() {
    return (
      <div>
        <p>Options: returns=promise async=false args=none</p>
        <p>Counter: <span id="counter">{this.value}</span></p>
      </div>
    );
  }
}
