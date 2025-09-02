import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'listen-document',
  scoped: true,
})
export class ListenDocument {
  @State() eventReceived = false;

  @Listen('custom-document-event', { target: 'document', capture: true })
  onCustomDocumentEvent() {
    this.eventReceived = true;
  }

  render() {
    return <span id="document-result">{this.eventReceived ? 'Received' : 'Not received'}</span>;
  }
}
