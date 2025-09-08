import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'state-any-cmp',
})
export class StateAnyCmp {
  @State() stateAny : any;

  render() {
    return <div>{JSON.stringify(this.stateAny)}</div>;
  }
}
