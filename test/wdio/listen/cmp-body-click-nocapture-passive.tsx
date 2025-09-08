import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-body-click-nocapture-passive',
  shadow: true
})
export class CmpBodyClickNoCapturePassive {
  @State() clicked = 0;

  @Listen('click', { target: 'body', capture: false, passive: true })
  handleBodyClick() {
    this.clicked++;
  }

  render() {
    return (
      <div>
        <input id="test-input" onClick={_ => document.body.click()} />
        <div id="clicked">Clicked: {this.clicked}</div>
      </div>
    );
  }
}
