import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'listen-host-input-nocapture-passive',
  shadow: false
})
export class ListenHostInputNocapturePassive {
  @State() eventReceived = false;

  @Listen('input', { passive: true })
  onInput() {
    this.eventReceived = true;
  }

  render() {
    return <span id="host-input-nocapture-passive-result">{this.eventReceived ? 'Received' : 'Not received'}</span>;
  }
}
