import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'listen-host-keydown-capture-nopassive',
  shadow: false
})
export class ListenHostKeydownCaptureNopassive {
  @State() eventReceived = false;

  @Listen('keydown', { capture: true, passive: false })
  onKeydown() {
    this.eventReceived = true;
  }

  render() {
    return <span id="host-keydown-capture-nopassive-result">{this.eventReceived ? 'Received' : 'Not received'}</span>;
  }
}
