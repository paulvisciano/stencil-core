import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'state-number-default-cmp',
  shadow: true,
})
export class StateNumberDefaultCmp {
  @State() stateNumber = 42;

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
