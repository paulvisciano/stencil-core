import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'listen-window-capture',
  scoped: true,
})
export class ListenWindowCapture {
  @State() eventReceived = false;

  @Listen('custom-window-event', { target: 'window', capture: true })
  onCustomWindowEvent() {
    this.eventReceived = true;
  }

  render() {
    return <span id="window-result">{this.eventReceived ? 'Received' : 'Not received'}</span>;
  }
}
