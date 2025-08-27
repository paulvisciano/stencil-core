import { Component, h, State, Method } from '@stencil/core';

@Component({
  tag: 'method-async-args-no-return-cmp',
})
export class MethodAsyncArgsNoReturnCmp {
  @State() called = false;

  @Method()
  async doSomething(arg: string): Promise<void> {
    this.called = true;
  }

  render() {
    return (
      <div>
        <button onClick={() => this.doSomething('test')}>Call Method</button>
        <span>{this.called ? 'called' : 'not called'}</span>
      </div>
    );
  }
}
