import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'state-array-cmp',
})
export class StateArrayCmp {
  @State() stateArray: any[];

  render() {
    return <div>{JSON.stringify(this.stateArray)}</div>;
  }
}
