import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-document-click-nocapture-passive',
  shadow: true
})
export class CmpDocumentClickNoCapturePassive {
  @State() clicked = 0;

  @Listen('click', { target: 'document', capture: false, passive: true })
  handleDocumentClick() {
    this.clicked++;
  }

  render() {
    return <div>document click no capture passive: {this.clicked}</div>;
  }
}
