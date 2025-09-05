import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-window-keydown-nocapture-nopassive',
  shadow: true
})
export class CmpWindowKeydownNoCaptureNoPassive {
  @State() keydowns = 0;

  @Listen('keydown', { target: 'window', capture: false, passive: false })
  handleWindowKeydown() {
    this.keydowns++;
  }

  render() {
    return <div>window keydown no capture no passive: {this.keydowns}</div>;
  }
}
