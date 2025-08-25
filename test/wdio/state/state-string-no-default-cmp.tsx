import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'state-string-no-default-cmp',
  shadow: true,
})
export class StateStringNoDefaultCmp {
  @State() stateString: string;

  render() {
    return (
      <div>
        <p>State string: {this.stateString}</p>
        <button onClick={() => (this.stateString = 'changed')}>
          Change State
        </button>
      </div>
    );
  }
}
