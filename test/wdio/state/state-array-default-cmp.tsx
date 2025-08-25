import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'state-array-default-cmp',
})
export class StateArrayDefaultCmp {
  @State() stateArray: any[] = [1, 2, 3];

  render() {
    return <div>{JSON.stringify(this.stateArray)}</div>;
  }
}
