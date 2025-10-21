// filepath: /Users/paul.visciano/repos/core/test/wdio/method/components/void/method-void-async-true-args-none.tsx
import { Component, h, Method, State } from '@stencil/core';

@Component({ tag: 'method-void-async-true-args-none', shadow: true })
export class MethodVoidAsyncTrueArgsNone {
  @State() value = 0;

  @Method() async run() {
    
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
        <p>Options: returns=void async=true args=none</p>
        <p>Counter: <span id="counter">{this.value}</span></p>
      </div>
    );
  }
}
