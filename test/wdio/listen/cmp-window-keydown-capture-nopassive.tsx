import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-window-keydown-capture-nopassive',
  shadow: true
})
export class CmpWindowKeydownCaptureNoPassive {
  @State() keydowns = 0;

  @Listen('keydown', { target: 'window', capture: true, passive: false })
  handleWindowKeydown() {
    this.keydowns++;
  }

  render() {
    return <div>window keydown capture no passive: {this.keydowns}</div>;
  }
}
