import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'state-string-default',
  shadow: true,
})
export class StateStringDefault {
  @State() val: string = 'initial';

  render() {
    return (
      <div>
        <p>Type: string | Default: true</p>
        <p>Value: {this.val}</p>
        <button onClick={() => (this.val = 'changed')}>Change</button>
      </div>
    );
  }
}
