import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-window-keydown-nocapture-passive',
  shadow: true
})
export class CmpWindowKeydownNoCapturePassive {
  @State() keydowns = 0;

  @Listen('keydown', { target: 'window', capture: false, passive: true })
  handleWindowKeydown() {
    this.keydowns++;
  }

  render() {
    return <div>window keydown no capture passive: {this.keydowns}</div>;
  }
}
