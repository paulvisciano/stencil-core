import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'listen-body',
  scoped: true,
})
export class ListenBody {
  @State() eventReceived = false;

  @Listen('custom-body-event', { target: 'body', capture: true })
  onCustomBodyEvent() {
    this.eventReceived = true;
  }

  render() {
    return <span id="body-result">{this.eventReceived ? 'Received' : 'Not received'}</span>;
  }
}
