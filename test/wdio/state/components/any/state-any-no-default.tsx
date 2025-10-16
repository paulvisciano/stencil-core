// filepath: /Users/paul.visciano/repos/core/test/wdio/state/components/any/state-any-no-default.tsx
import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'state-any-no-default',
  shadow: true,
})
export class StateAnyNoDefault {
  @State() val: any;

  render() {
    return (
      <div>
        <p>Type: any | Default: false</p>
        <p>Value: {String(this.val)}</p>
        <button onClick={() => (this.val = 'updated')}>Change</button>
      </div>
    );
  }
}
