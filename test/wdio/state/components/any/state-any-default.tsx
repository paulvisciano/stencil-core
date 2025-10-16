// filepath: /Users/paul.visciano/repos/core/test/wdio/state/components/any/state-any-default.tsx
import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'state-any-default',
  shadow: true,
})
export class StateAnyDefault {
  @State() val: any = 'any';

  render() {
    return (
      <div>
        <p>Type: any | Default: true</p>
        <p>Value: {String(this.val)}</p>
        <button onClick={() => (this.val = 'updated')}>Change</button>
      </div>
    );
  }
}
