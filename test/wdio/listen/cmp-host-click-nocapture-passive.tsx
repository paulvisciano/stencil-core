import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'listen-host-click-nocapture-passive',
  shadow: false
})
export class ListenHostClickNocapturePassive {
  @State() eventReceived = false;

  @Listen('click', { passive: true })
  onClick() {
    this.eventReceived = true;
  }

  render() {
    return <span id="host-click-nocapture-passive-result">{this.eventReceived ? 'Received' : 'Not received'}</span>;
  }
}
