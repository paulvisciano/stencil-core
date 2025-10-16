// filepath: /Users/paul.visciano/repos/core/test/wdio/state/components/array/state-array-no-default.tsx
import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'state-array-no-default',
  shadow: true,
})
export class StateArrayNoDefault {
  @State() val: any[];

  render() {
    return (
      <div>
        <p>Type: array | Default: false</p>
        <p>Value: {JSON.stringify(this.val)}</p>
        <button onClick={() => (this.val = [...this.val, 'x'])}>Change</button>
      </div>
    );
  }
}
