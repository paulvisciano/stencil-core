import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-body-keydown-capture-nopassive',
  shadow: true
})
export class CmpBodyKeydownCaptureNoPassive {
  @State() keydowns = 0;

  @Listen('keydown', { target: 'body', capture: true, passive: false })
  handleBodyKeydown() {
    this.keydowns++;
  }

  render() {
    return <div>body keydown capture no passive: {this.keydowns}</div>;
  }
}
