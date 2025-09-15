// filepath: /Users/paul.visciano/repos/core/test/wdio/state/matrix/number/state-number-no-default.tsx
import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'state-number-no-default',
  shadow: true,
})
export class StateNumberNoDefault {
  @State() val: number;

  render() {
    return (
      <div>
        <p>Type: number | Default: false</p>
        <p>Value: {this.val}</p>
        <button onClick={() => (this.val = this.val + 1)}>Change</button>
      </div>
    );
  }
}
