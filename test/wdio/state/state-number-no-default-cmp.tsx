import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'state-number-no-default-cmp',
  shadow: true,
})
export class StateNumberNoDefaultCmp {
  @State() stateNumber: number;

  render() {
    return (
      <div>
        <p>State number: {this.stateNumber}</p>
        <button onClick={() => (this.stateNumber = 99)}>
          Change State
        </button>
      </div>
    );
  }
}
