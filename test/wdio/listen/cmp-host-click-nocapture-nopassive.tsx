import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'listen-host-click-nocapture-nopassive',
  shadow: false
})
export class ListenHostClickNocaptureNopassive {
  @State() eventReceived = false;

  @Listen('click', { passive: false })
  onClick() {
    this.eventReceived = true;
  }

  render() {
    return <span id="host-click-nocapture-nopassive-result">{this.eventReceived ? 'Received' : 'Not received'}</span>;
  }
}
