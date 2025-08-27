import { Component, Method, State, h } from '@stencil/core';

@Component({ tag: 'method-async-args-return-cmp' })
export class MethodAsyncArgsReturnCmp {
  @State() result: string = '';

  @Method()
  async doSomething(arg: string): Promise<string> {
    this.result = `async ${arg}`;
    return this.result;
  }

  private handleClick = async () => {
    await this.doSomething('test');
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Call Method</button>
        <span id="result">{this.result}</span>
      </div>
    );
  }
}
