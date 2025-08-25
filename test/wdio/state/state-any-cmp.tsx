import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'state-any-cmp',
})
export class StateAnyCmp {
  @State() stateAny;

  render() {
    return <div>{JSON.stringify(this.stateAny)}</div>;
  }
}
