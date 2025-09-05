import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-body-input-nocapture-nopassive',
  shadow: true
})
export class CmpBodyInputNocaptureNoPassive {
  @State() inputs = 0;

  @Listen('input', { target: 'body', capture: false, passive: false })
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
        <div id="output">body input nocapture nopassive: {this.inputs}</div>
      </div>
    );
  }
}
