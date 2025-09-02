import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'listen-host-capture',
  scoped: true,
})
export class ListenHostCapture {
  @State() eventReceived = false;

  @Listen('custom-host-event', { capture: true })
  onCustomHostEvent() {
    this.eventReceived = true;
  }

  render() {
    return <span id="host-capture-result">{this.eventReceived ? 'Received' : 'Not received'}</span>;
  }
}
