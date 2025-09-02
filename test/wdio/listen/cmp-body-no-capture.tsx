import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'listen-body-no-capture',
  scoped: true,
})
export class ListenBodyNoCapture {
  @State() eventReceived = false;

  @Listen('custom-body-event', { target: 'body' })
  onCustomBodyEvent() {
    this.eventReceived = true;
  }

  render() {
    return <span id="body-no-capture-result">{this.eventReceived ? 'Received' : 'Not received'}</span>;
  }
}
