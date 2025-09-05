import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'listen-host-click-capture-passive',
  shadow: false
})
export class ListenHostClickCapturePassive {
  @State() eventReceived = false;

  @Listen('click', { capture: true, passive: true })
  onClick() {
    this.eventReceived = true;
  }

  render() {
    return <span id="host-click-capture-passive-result">{this.eventReceived ? 'Received' : 'Not received'}</span>;
  }
}
