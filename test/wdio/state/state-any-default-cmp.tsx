import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'state-any-default-cmp',
})
export class StateAnyDefaultCmp {
  @State() stateAny: any = 'default';

  render() {
    return <div>{this.stateAny}</div>;
  }
}
