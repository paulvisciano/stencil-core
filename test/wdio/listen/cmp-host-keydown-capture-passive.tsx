import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'listen-host-keydown-capture-passive',
  shadow: false
})
export class ListenHostKeydownCapturePassive {
  @State() eventReceived = false;

  @Listen('keydown', { capture: true, passive: true })
  onKeydown() {
    this.eventReceived = true;
  }

  render() {
    return <span id="host-keydown-capture-passive-result">{this.eventReceived ? 'Received' : 'Not received'}</span>;
  }
}
