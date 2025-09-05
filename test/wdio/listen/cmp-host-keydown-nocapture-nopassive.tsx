import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'listen-host-keydown-nocapture-nopassive',
  shadow: false
})
export class ListenHostKeydownNocaptureNopassive {
  @State() eventReceived = false;

  @Listen('keydown', { passive: false })
  onKeydown() {
    this.eventReceived = true;
  }

  render() {
    return <span id="host-keydown-nocapture-nopassive-result">{this.eventReceived ? 'Received' : 'Not received'}</span>;
  }
}
