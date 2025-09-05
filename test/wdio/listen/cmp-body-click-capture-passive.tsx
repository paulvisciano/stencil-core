import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-body-click-capture-passive',
  shadow: true
})
export class CmpBodyClickCapturePassive {
  @State() clicked = 0;

  @Listen('click', { target: 'body', capture: true, passive: true })
  handleBodyClick() {
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
