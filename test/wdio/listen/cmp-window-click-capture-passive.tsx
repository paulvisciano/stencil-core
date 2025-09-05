import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-window-click-capture-passive',
  shadow: true
})
export class CmpWindowClickCapturePassive {
  @State() clicked = 0;

  @Listen('click', { target: 'window', capture: true, passive: true })
  handleWindowClick() {
    this.clicked++;
  }

  render() {
    return <div>window click capture passive: {this.clicked}</div>;
  }
}
