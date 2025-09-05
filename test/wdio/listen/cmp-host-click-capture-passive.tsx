import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'listen-host-click-capture-passive',
  shadow: false
})
export class ListenHostClickCapturePassive {
  @State() eventReceived = false;
  @State() clicked = 0;

  @Listen('click', { capture: true, passive: true })
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
