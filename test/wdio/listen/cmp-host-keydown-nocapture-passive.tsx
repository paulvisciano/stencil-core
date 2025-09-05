import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'listen-host-keydown-nocapture-passive',
  shadow: false
})
export class ListenHostKeydownNocapturePassive {
  @State() eventReceived = false;

  @Listen('keydown', { passive: true })
  onKeydown() {
    this.eventReceived = true;
  }

  render() {
    return <span id="host-keydown-nocapture-passive-result">{this.eventReceived ? 'Received' : 'Not received'}</span>;
  }
}
