import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'listen-host-input-capture-nopassive',
  shadow: false
})
export class ListenHostInputCaptureNopassive {
  @State() eventReceived = false;

  @Listen('input', { capture: true, passive: false })
  onInput() {
    this.eventReceived = true;
  }

  render() {
    return <span id="host-input-capture-nopassive-result">{this.eventReceived ? 'Received' : 'Not received'}</span>;
  }
}
