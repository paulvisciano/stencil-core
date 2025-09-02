import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'listen-parent-no-capture',
  scoped: true,
})
export class ListenParentNoCapture {
  @State() eventReceived = false;

  @Listen('custom-parent-event', { target: 'parent' })
  onCustomParentEvent() {
    this.eventReceived = true;
  }

  render() {
    return <span id="parent-no-capture-result">{this.eventReceived ? 'Received' : 'Not received'}</span>;
  }
}
