import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'listen-parent-capture',
  scoped: true,
})
export class ListenParentCapture {
  @State() eventReceived = false;

  @Listen('custom-parent-event', { target: 'parent', capture: true })
  onCustomParentEvent() {
    this.eventReceived = true;
  }

  render() {
    return <span id="parent-capture-result">{this.eventReceived ? 'Received' : 'Not received'}</span>;
  }
}
