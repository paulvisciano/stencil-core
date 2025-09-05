import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-document-click-nocapture-nopassive',
  shadow: true
})
export class CmpDocumentClickNoCaptureNoPassive {
  @State() clicked = 0;

  @Listen('click', { target: 'document', capture: false, passive: false })
  handleDocumentClick() {
    this.clicked++;
  }

  render() {
    return (
      <div>
        <div id="clicked">Clicked: {this.clicked}</div>
      </div>
    );
  }
}
