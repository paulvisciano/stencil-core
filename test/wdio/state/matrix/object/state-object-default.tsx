// filepath: /Users/paul.visciano/repos/core/test/wdio/state/matrix/object/state-object-default.tsx
import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'state-object-default',
  shadow: true,
})
export class StateObjectDefault {
  @State() val: object = {};

  render() {
    return (
      <div>
        <p>Type: object | Default: true</p>
        <p>Value: {JSON.stringify(this.val)}</p>
        <button onClick={() => (this.val = { ...this.val, x: true })}>Change</button>
      </div>
    );
  }
}
