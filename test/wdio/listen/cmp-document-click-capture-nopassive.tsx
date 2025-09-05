import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-document-click-capture-nopassive',
  shadow: true
})
export class CmpDocumentClickCaptureNoPassive {
  @State() clicked = 0;

  @Listen('click', { target: 'document', capture: true, passive: false })
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
