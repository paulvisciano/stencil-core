// filepath: /Users/paul.visciano/repos/core/test/wdio/method/matrix/value/method-value-async-one.tsx
import { Component, h, Method, State } from '@stencil/core';

@Component({ tag: 'method-value-async-one', shadow: true })
export class MethodValueAsyncOne {
  @State() value = 0;

  @Method() async run(x) {
    return x ?? 1;
  }

  async componentDidLoad() {
    const host = this.host as any;
    const result = await (host as any).run(2);
    if (typeof result === 'number') this.value = result; else this.value++;
  }

  private get host() { return (this as any).el || (this as any).$host$ || this as any; }

  render() {
    return (
      <div>
        <p>Options: returns=value async=true args=one</p>
        <p>Counter: <span id="counter">{this.value}</span></p>
      </div>
    );
  }
}
