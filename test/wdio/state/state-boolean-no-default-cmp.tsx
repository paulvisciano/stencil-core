import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'state-boolean-no-default-cmp',
  shadow: true,
})
export class StateBooleanNoDefaultCmp {
  @State() stateBoolean: boolean;

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
