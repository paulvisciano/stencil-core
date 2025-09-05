import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-window-click-nocapture-passive',
  shadow: true
})
export class CmpWindowClickNoCapturePassive {
  @State() clicked = 0;

  @Listen('click', { target: 'window', capture: false, passive: true })
  handleWindowClick() {
    this.clicked++;
  }

  render() {
    return <div>window click no capture passive: {this.clicked}</div>;
  }
}
