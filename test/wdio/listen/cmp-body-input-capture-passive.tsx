import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-body-input-capture-passive',
  shadow: true
})
export class CmpBodyInputCapturePassive {
  @State() inputCount = 0;

  @Listen('input', { target: 'body', capture: true, passive: true })
  handleBodyInput() {
    this.inputCount++;
  }

  disconnectedCallback() {
    document.body.removeEventListener('input', this.handleBodyInput, { capture: true });
  }

  render() {
    return (
      <div>
        <input id="test-input" />
        <div id="output">body input capture passive: {this.inputCount}</div>
      </div>
    );
  }
}
