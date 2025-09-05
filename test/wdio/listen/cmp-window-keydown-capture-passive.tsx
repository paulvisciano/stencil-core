import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-window-keydown-capture-passive',
  shadow: true
})
export class CmpWindowKeydownCapturePassive {
  @State() keydowns = 0;

  @Listen('keydown', { target: 'window', capture: true, passive: true })
  handleWindowKeydown() {
    this.keydowns++;
  }

  render() {
    return <div>window keydown capture passive: {this.keydowns}</div>;
  }
}
