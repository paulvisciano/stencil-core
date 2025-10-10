// filepath: /Users/paul.visciano/repos/core/test/wdio/listen/matrix/window/listen-window-click-capture-passive-false.tsx
import { Component, h, Listen, State } from '@stencil/core';

@Component({ tag: 'listen-window-click-capture-passive-false', shadow: true })
export class ListenWindowClickCapturePassiveFalse {
  @State() counter = 0;

  @Listen('click', { target: 'window', capture: true, passive: false })
  onEv() {
    this.counter++;
  }

  componentDidLoad() {
    const el = this.host as HTMLElement;
    const win = window;
    const doc = document;
    const body = document.body;
    // fire event on the appropriate target
    const ev = new Event('click', { bubbles: true, cancelable: true, composed: true });
    if ('window' === 'window') win.dispatchEvent(ev);
    else if ('window' === 'document') doc.dispatchEvent(ev);
    else if ('window' === 'body') body.dispatchEvent(ev);
    else el.dispatchEvent(ev);
  }

  private get host() { return (this as any).el || (this as any).$host$ || this as any; }

  render() {
    return (
      <div>
        <p>Options: target=window event=click capture=true passive=false</p>
        <p>Counter: <span id="counter">{this.counter}</span></p>
      </div>
    );
  }
}
