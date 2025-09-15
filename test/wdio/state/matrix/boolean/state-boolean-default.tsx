// filepath: /Users/paul.visciano/repos/core/test/wdio/state/matrix/boolean/state-boolean-default.tsx
import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'state-boolean-default',
  shadow: true,
})
export class StateBooleanDefault {
  @State() val: boolean = false;

  render() {
    return (
      <div>
        <p>Type: boolean | Default: true</p>
        <p>Value: {this.val ? 'true' : 'false'}</p>
        <button onClick={() => (this.val = !this.val)}>Change</button>
      </div>
    );
  }
}
