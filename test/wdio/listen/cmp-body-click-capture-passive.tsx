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
    return <div>body click capture passive: {this.clicked}</div>;
  }
}
