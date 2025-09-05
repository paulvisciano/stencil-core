import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-body-keydown-nocapture-nopassive',
  shadow: true
})
export class CmpBodyKeydownNoCaptureNoPassive {
  @State() keydowns = 0;

  @Listen('keydown', { target: 'body', capture: false, passive: false })
  handleBodyKeydown() {
    this.keydowns++;
  }

  render() {
    return <div>body keydown no capture no passive: {this.keydowns}</div>;
  }
}
