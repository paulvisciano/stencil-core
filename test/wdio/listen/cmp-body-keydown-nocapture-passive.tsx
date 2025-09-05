import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-body-keydown-nocapture-passive',
  shadow: true
})
export class CmpBodyKeydownNoCapturePassive {
  @State() keydowns = 0;

  @Listen('keydown', { target: 'body', capture: false, passive: true })
  handleBodyKeydown() {
    this.keydowns++;
  }

  render() {
    return <div>body keydown no capture passive: {this.keydowns}</div>;
  }
}
