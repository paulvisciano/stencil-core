import { Component, Element, h, Listen, State } from '@stencil/core';

@Component({ tag: 'listen-document-input-capture-passive-false', shadow: true })
export class ListenDocumentInputCapturePassiveFalse {
  @Element() el!: HTMLElement;
  @State() counter = 0;

  @Listen('input-listen-document-input-capture-passive-false', { target: 'document', capture: true, passive: false })
  onEv() {
    this.counter++;
  }

  async componentDidLoad() {
    // Wait for next tick to ensure listener is attached
    await new Promise(resolve => setTimeout(resolve, 0));
    const win = window;
    const doc = document;
    const body = document.body;
    // fire event on the appropriate target with unique event name
    const ev = new Event('input-listen-document-input-capture-passive-false', { bubbles: true, cancelable: true, composed: true });
    const target: string = 'document';
    if (target === 'window') {
      win.dispatchEvent(ev);
    } else if (target === 'document') {
      doc.dispatchEvent(ev);
    } else if (target === 'body') {
      body.dispatchEvent(ev);
    } else {
      // host target - dispatch on the component element
      this.el.dispatchEvent(ev);
    }
  }

  render() {
    return (
      <div>
        <p>Options: target=document event=input capture=true passive=false</p>
        <p>Counter: <span id="counter">{this.counter}</span></p>
      </div>
    );
  }
}
