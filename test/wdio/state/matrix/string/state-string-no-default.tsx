// filepath: /Users/paul.visciano/repos/core/test/wdio/state/matrix/string/state-string-no-default.tsx
import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'state-string-no-default',
  shadow: true,
})
export class StateStringNoDefault {
  @State() val: string;

  render() {
    return (
      <div>
        <p>Type: string | Default: false</p>
        <p>Value: {this.val}</p>
        <button onClick={() => (this.val = 'changed')}>Change</button>
      </div>
    );
  }
}
