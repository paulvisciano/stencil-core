import { Component, h, State, Method } from '@stencil/core';

@Component({
  tag: 'method-async-noargs-return-cmp',
})
export class MethodAsyncNoArgsReturnCmp {
  @State() result: string = '';

  @Method()
  async getResult(): Promise<string> {
    return 'success';
  }

  render() {
    return (
      <div>
        <button onClick={async () => { this.result = await this.getResult(); }}>Call Method</button>
        <span>{this.result}</span>
      </div>
    );
  }
}
