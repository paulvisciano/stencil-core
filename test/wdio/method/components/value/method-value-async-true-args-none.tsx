import { Component, h, Method, State } from '@stencil/core';

@Component({ tag: 'method-value-async-true-args-none', shadow: true })
export class MethodValueAsyncTrueArgsNone {
  @State() value = 0;

  @Method() async run() {
    return  1;
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
        <p>Options: returns=value async=true args=none</p>
        <p>Counter: <span id="counter">{this.value}</span></p>
      </div>
    );
  }
}
