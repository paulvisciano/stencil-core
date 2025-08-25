import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'state-object-cmp',
})
export class StateObjectCmp {
  @State() stateObject: any;

  render() {
    return <div>{JSON.stringify(this.stateObject)}</div>;
  }
}
