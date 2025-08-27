import { Component, h, State, Method } from '@stencil/core';

@Component({
  tag: 'method-async-noargs-no-return-cmp',
})
export class MethodAsyncNoArgsNoReturnCmp {
  @State() called = false;

  @Method()
  async doSomething(): Promise<void> {
    this.called = true;
  }

  render() {
    return (
      <div>
        <button onClick={() => this.doSomething()}>Call Method</button>
        <span>{this.called ? 'called' : 'not called'}</span>
      </div>
    );
  }
}
