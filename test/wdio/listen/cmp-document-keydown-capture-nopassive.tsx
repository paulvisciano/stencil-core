import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-document-keydown-capture-nopassive',
  shadow: true
})
export class CmpDocumentKeydownCaptureNoPassive {
  @State() keydowns = 0;

  @Listen('keydown', { target: 'document', capture: true, passive: false })
  handleDocumentKeydown() {
    this.keydowns++;
  }

  render() {
    return <div>document keydown capture no passive: {this.keydowns}</div>;
  }
}
