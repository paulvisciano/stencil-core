import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'state-object-no-default',
  shadow: true,
})
export class StateObjectNoDefault {
  @State() val: object;

  render() {
    return (
      <div>
        <p>Type: object | Default: false</p>
        <p>Value: {JSON.stringify(this.val)}</p>
        <button onClick={() => (this.val = { ...this.val, x: true })}>Change</button>
      </div>
    );
  }
}
