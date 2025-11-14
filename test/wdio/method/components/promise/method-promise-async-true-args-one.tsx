import { Component, h, Method, State } from '@stencil/core';

@Component({ tag: 'method-promise-async-true-args-one', shadow: true })
export class MethodPromiseAsyncTrueArgsOne {
  @State() value = 0;

  @Method() async run(x: any) {
    return new Promise(resolve => setTimeout(() => resolve(x ?? 1), 0));
  }

  async componentDidLoad() {
    const host = this.host as any;
    const result = await (host as any).run(1);
    if (typeof result === 'number') this.value = result; else this.value++;
  }

  private get host() { return (this as any).el || (this as any).$host$ || this as any; }

  render() {
    return (
      <div>
        <p>Options: returns=promise async=true args=one</p>
        <p>Counter: <span id="counter">{this.value}</span></p>
      </div>
    );
  }
}
