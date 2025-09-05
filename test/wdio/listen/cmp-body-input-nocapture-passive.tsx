import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-body-input-nocapture-passive',
  shadow: true
})
export class CmpBodyInputNocapturePassive {
  @State() inputs = 0;

  @Listen('input', { target: 'body', capture: false, passive: true })
  handleBodyInput() {
    this.inputs++;
  }

  disconnectedCallback() {
    document.body.removeEventListener('input', this.handleBodyInput, { capture: false });
  }

  render() {
    return (
      <div>
        <input id="test-input" />
        <div id="output">body input nocapture passive: {this.inputs}</div>
      </div>
    );
  }
}
