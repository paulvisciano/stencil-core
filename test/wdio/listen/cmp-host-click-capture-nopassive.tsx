import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'listen-host-click-capture-nopassive',
  shadow: false
})
export class ListenHostClickCaptureNopassive {
  @State() eventReceived = false;

  @Listen('click', { capture: true, passive: false })
  onClick() {
    this.eventReceived = true;
  }

  render() {
    return <span id="host-click-capture-nopassive-result">{this.eventReceived ? 'Received' : 'Not received'}</span>;
  }
}
