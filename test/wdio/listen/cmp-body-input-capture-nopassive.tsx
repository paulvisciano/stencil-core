import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-body-input-capture-nopassive',
  shadow: true
})
export class CmpBodyInputCaptureNoPassive {
  @State() inputCount = 0;

  @Listen('input', { target: 'body', capture: true, passive: false })
  handleBodyInput() {
    this.inputCount++;
  }

  render() {
    return <div>body input capture no passive: {this.inputCount}</div>;
  }
}
