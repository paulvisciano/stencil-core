import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-document-input-nocapture-nopassive',
  shadow: true
})
export class CmpDocumentInputNoCaptureNoPassive {
  @State() inputCount = 0;

  @Listen('input', { target: 'document', capture: false, passive: false })
  handleDocumentInput() {
    this.inputCount++;
  }

  render() {
    return <div>document input no capture no passive: {this.inputCount}</div>;
  }
}
