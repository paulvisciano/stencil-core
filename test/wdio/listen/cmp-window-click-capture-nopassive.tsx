import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-window-click-capture-nopassive',
  shadow: true
})
export class CmpWindowClickCaptureNoPassive {
  @State() clicked = 0;

  @Listen('click', { target: 'window', capture: true, passive: false })
  handleWindowClick() {
    this.clicked++;
  }

  render() {
    return <div>window click capture no passive: {this.clicked}</div>;
  }
}
