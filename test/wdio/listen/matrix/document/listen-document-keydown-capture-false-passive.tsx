// filepath: /Users/paul.visciano/repos/core/test/wdio/listen/matrix/document/listen-document-keydown-capture-false-passive.tsx
import { Component, h, Listen, State } from '@stencil/core';

@Component({ tag: 'listen-document-keydown-capture-false-passive', shadow: true })
export class ListenDocumentKeydownCaptureFalsePassive {
  @State() counter = 0;

  @Listen('keydown', { target: 'document', capture: false, passive: true })
  onEv() {
    this.counter++;
  }

  componentDidLoad() {
    const el = this.host as HTMLElement;
    const win = window;
    const doc = document;
    const body = document.body;
    // fire event on the appropriate target
    const ev = new Event('keydown', { bubbles: true, cancelable: true, composed: true });
    if ('document' === 'window') win.dispatchEvent(ev);
    else if ('document' === 'document') doc.dispatchEvent(ev);
    else if ('document' === 'body') body.dispatchEvent(ev);
    else el.dispatchEvent(ev);
  }

  private get host() { return (this as any).el || (this as any).$host$ || this as any; }

  render() {
    return (
      <div>
        <p>Options: target=document event=keydown capture=false passive=true</p>
        <p>Counter: <span id="counter">{this.counter}</span></p>
      </div>
    );
  }
}
