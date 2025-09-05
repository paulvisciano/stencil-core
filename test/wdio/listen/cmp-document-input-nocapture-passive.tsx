import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-document-input-nocapture-passive',
  shadow: true
})
export class CmpDocumentInputNoCapturePassive {
  @State() inputCount = 0;

  @Listen('input', { target: 'document', capture: false, passive: true })
  handleDocumentInput() {
    this.inputCount++;
  }

  render() {
    return (
      <div>
        <input id="test-input" />
        <div id="output">document input nocapture passive: {this.inputCount}</div>
      </div>
    );
  }
}
