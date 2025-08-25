import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'state-string-default-cmp',
  shadow: true,
})
export class StateStringDefaultCmp {
  @State() stateString = 'initial';

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
