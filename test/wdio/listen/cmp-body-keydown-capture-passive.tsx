import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-body-keydown-capture-passive',
  shadow: true
})
export class CmpBodyKeydownCapturePassive {
  @State() keydowns = 0;

  @Listen('keydown', { target: 'body', capture: true, passive: true })
  handleBodyKeydown() {
    this.keydowns++;
  }

  render() {
    return <div>body keydown capture passive: {this.keydowns}</div>;
  }
}
