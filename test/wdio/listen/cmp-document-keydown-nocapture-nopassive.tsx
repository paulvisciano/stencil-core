import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-document-keydown-nocapture-nopassive',
  shadow: true
})
export class CmpDocumentKeydownNoCaptureNoPassive {
  @State() keydowns = 0;

  @Listen('keydown', { target: 'document', capture: false, passive: false })
  handleDocumentKeydown() {
    this.keydowns++;
  }

  render() {
    return <div>document keydown no capture no passive: {this.keydowns}</div>;
  }
}
