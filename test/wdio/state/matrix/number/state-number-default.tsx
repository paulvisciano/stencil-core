// filepath: /Users/paul.visciano/repos/core/test/wdio/state/matrix/number/state-number-default.tsx
import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'state-number-default',
  shadow: true,
})
export class StateNumberDefault {
  @State() val: number = 0;

  render() {
    return (
      <div>
        <p>Type: number | Default: true</p>
        <p>Value: {this.val}</p>
        <button onClick={() => (this.val = this.val + 1)}>Change</button>
      </div>
    );
  }
}
