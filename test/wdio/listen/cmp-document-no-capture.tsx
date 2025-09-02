import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'listen-document-no-capture',
  scoped: true,
})
export class ListenDocumentNoCapture {
  @State() eventReceived = false;

  @Listen('custom-document-event', { target: 'document' })
  onCustomDocumentEvent() {
    this.eventReceived = true;
  }

  render() {
    return <span id="document-no-capture-result">{this.eventReceived ? 'Received' : 'Not received'}</span>;
  }
}
