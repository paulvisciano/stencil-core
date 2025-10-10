// filepath: /Users/paul.visciano/repos/core/test/wdio/listen/matrix/host/listen-host-keydown-capture-false-passive.tsx
import { Component, h, Listen, State } from '@stencil/core';

@Component({ tag: 'listen-host-keydown-capture-false-passive', shadow: true })
export class ListenHostKeydownCaptureFalsePassive {
  @State() counter = 0;

  @Listen('keydown', { capture: false, passive: true })
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
    if ('host' === 'window') win.dispatchEvent(ev);
    else if ('host' === 'document') doc.dispatchEvent(ev);
    else if ('host' === 'body') body.dispatchEvent(ev);
    else el.dispatchEvent(ev);
  }

  private get host() { return (this as any).el || (this as any).$host$ || this as any; }

  render() {
    return (
      <div>
        <p>Options: target=host event=keydown capture=false passive=true</p>
        <p>Counter: <span id="counter">{this.counter}</span></p>
      </div>
    );
  }
}
