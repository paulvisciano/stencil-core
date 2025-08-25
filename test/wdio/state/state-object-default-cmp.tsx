import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'state-object-default-cmp',
})
export class StateObjectDefaultCmp {
  @State() stateObject: any = { a: 1 };

  render() {
    return <div>{JSON.stringify(this.stateObject)}</div>;
  }
}
