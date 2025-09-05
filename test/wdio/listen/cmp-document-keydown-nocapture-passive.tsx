import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-document-keydown-nocapture-passive',
  shadow: true
})
export class CmpDocumentKeydownNoCapturePassive {
  @State() keydowns = 0;

  @Listen('keydown', { target: 'document', capture: false, passive: true })
  handleDocumentKeydown() {
    this.keydowns++;
  }

  render() {
    return <div>document keydown no capture passive: {this.keydowns}</div>;
  }
}
