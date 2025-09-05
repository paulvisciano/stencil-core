import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-body-input-nocapture-nopassive',
  shadow: true
})
export class CmpBodyInputNocaptureNoPassive {
  @State() inputs = 0;

  @Listen('input', { target: 'body', capture: false, passive: false })
  handleBodyInput() {
    this.inputs++;
  }

  render() {
    return <div>body input nocapture no passive: {this.inputs}</div>;
  }
}
