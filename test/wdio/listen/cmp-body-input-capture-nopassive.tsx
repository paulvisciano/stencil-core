import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-body-input-capture-nopassive',
  shadow: true
})
export class CmpBodyInputCaptureNoPassive {
  @State() inputCount = 0;

  @Listen('input', { target: 'body', capture: true, passive: false })
  handleBodyInput() {
    this.inputCount++;
  }

  disconnectedCallback() {
    document.body.removeEventListener('input', this.handleBodyInput, { capture: true });
  }

  render() {
    return (
      <div>
        <input id="test-input" />
        <div id="output">body input capture nopassive: {this.inputCount}</div>
      </div>
    );
  }
}
