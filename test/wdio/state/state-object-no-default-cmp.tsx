import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'state-object-no-default-cmp',
})
export class StateObjectNoDefaultCmp {
  @State() stateObject: object;

  render() {
    return <div>{JSON.stringify(this.stateObject)}</div>;
  }
}
