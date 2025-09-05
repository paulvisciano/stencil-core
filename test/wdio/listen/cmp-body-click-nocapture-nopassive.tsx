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

  render() {
    return <div>body click no capture no passive: {this.clicked}</div>;
  }
}
