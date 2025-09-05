import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'listen-host-input-nocapture-nopassive',
  shadow: false
})
export class ListenHostInputNocaptureNopassive {
  @State() eventReceived = false;

  @Listen('input', { passive: false })
  onInput() {
    this.eventReceived = true;
  }

  render() {
    return <span id="host-input-nocapture-nopassive-result">{this.eventReceived ? 'Received' : 'Not received'}</span>;
  }
}
