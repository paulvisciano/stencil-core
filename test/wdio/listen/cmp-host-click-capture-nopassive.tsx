import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'listen-host-click-capture-nopassive',
  shadow: false
})
export class ListenHostClickCaptureNopassive {
  @State() eventReceived = false;
  @State() clicked = 0;

  @Listen('click', { capture: true, passive: false })
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
