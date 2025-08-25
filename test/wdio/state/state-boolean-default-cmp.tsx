import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'state-boolean-default-cmp',
  shadow: true,
})
export class StateBooleanDefaultCmp {
  @State() stateBoolean : boolean = false;

  render() {
    return (
      <div>
        <p>State boolean: {String(this.stateBoolean)}</p>
        <button onClick={() => (this.stateBoolean = true)}>
          Change State
        </button>
      </div>
    );
  }
}
