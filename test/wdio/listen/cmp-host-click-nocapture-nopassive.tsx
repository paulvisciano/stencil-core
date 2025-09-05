import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'listen-host-click-nocapture-nopassive',
  shadow: false
})
export class ListenHostClickNocaptureNopassive {
  @State() eventReceived = false;
  @State() clicked = 0;

  @Listen('click', { passive: false })
  onClick() {
    this.eventReceived = true;
    this.clicked++;
  }

  render() {
    return (
      <div>
        <div id="clicked">Clicked: {this.clicked}</div>
      </div>
    );
  }
}
