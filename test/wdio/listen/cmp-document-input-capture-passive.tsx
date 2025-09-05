import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-document-input-capture-passive',
  shadow: true
})
export class CmpDocumentInputCapturePassive {
  @State() inputCount = 0;

  @Listen('input', { target: 'document', capture: true, passive: true })
  handleDocumentInput() {
    this.inputCount++;
  }

  render() {
    return (
      <div>
        <input id="test-input" />
        <div id="output">document input capture passive: {this.inputCount}</div>
      </div>
    );
  }
}
