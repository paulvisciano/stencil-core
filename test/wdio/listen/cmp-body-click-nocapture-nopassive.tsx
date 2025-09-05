import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-body-click-nocapture-nopassive',
  shadow: true
})
export class CmpBodyClickNoCaptureNoPassive {
  @State() clicked = 0;

  @Listen('click', { target: 'body', capture: false, passive: false })
  handleBodyClick() {
    this.clicked++;
  }

  disconnectedCallback() {
    document.body.removeEventListener('click', this.handleBodyClick, { capture: false });
  }

  render() {
    return (
      <div>
        <div id="clicked">Clicked: {this.clicked}</div>
      </div>
    );
  }
}
