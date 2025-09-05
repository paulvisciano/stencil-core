import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'listen-host-input-capture-passive',
  shadow: false
})
export class ListenHostInputCapturePassive {
  @State() eventReceived = false;

  @Listen('input', { capture: true, passive: true })
  onInput() {
    this.eventReceived = true;
  }

  render() {
    return <span id="host-input-capture-passive-result">{this.eventReceived ? 'Received' : 'Not received'}</span>;
  }
}
