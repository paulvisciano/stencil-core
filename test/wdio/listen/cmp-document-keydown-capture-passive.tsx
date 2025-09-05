import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cmp-document-keydown-capture-passive',
  shadow: true
})
export class CmpDocumentKeydownCapturePassive {
  @State() keydowns = 0;

  @Listen('keydown', { target: 'document', capture: true, passive: true })
  handleDocumentKeydown() {
    this.keydowns++;
  }

  render() {
    return <div>document keydown capture passive: {this.keydowns}</div>;
  }
}
