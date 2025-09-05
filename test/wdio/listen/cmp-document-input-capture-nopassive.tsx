import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-document-input-capture-nopassive',
  shadow: true
})
export class CmpDocumentInputCaptureNoPassive {
  @State() inputCount = 0;

  @Listen('input', { target: 'document', capture: true, passive: false })
  handleDocumentInput() {
    this.inputCount++;
  }

  render() {
    return <div>document input capture no passive: {this.inputCount}</div>;
  }
}
