import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'state-boolean-no-default',
  shadow: true,
})
export class StateBooleanNoDefault {
  @State() val: boolean;

  render() {
    return (
      <div>
        <p>Type: boolean | Default: false</p>
        <p>Value: {this.val ? 'true' : 'false'}</p>
        <button onClick={() => (this.val = !this.val)}>Change</button>
      </div>
    );
  }
}
