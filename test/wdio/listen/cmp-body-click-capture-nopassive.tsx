import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-body-click-capture-nopassive',
  shadow: true
})
export class CmpBodyClickCaptureNoPassive {
  @State() clicked = 0;

  @Listen('click', { target: 'body', capture: true, passive: false })
  handleBodyClick() {
    this.clicked++;
  }

  render() {
    return <div>body click capture no passive: {this.clicked}</div>;
  }
}
