import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-document-click-capture-passive',
  shadow: true
})
export class CmpDocumentClickCapturePassive {
  @State() clicked = 0;

  @Listen('click', { target: 'document', capture: true, passive: true })
  handleDocumentClick() {
    this.clicked++;
  }

  render() {
    return <div>document click capture passive: {this.clicked}</div>;
  }
}
