import { Component, Element, h, Listen, State } from '@stencil/core';

@Component({ tag: 'listen-body-click-capture-passive-false', shadow: true })
export class ListenBodyClickCapturePassiveFalse {
  @Element() el!: HTMLElement;
  @State() counter = 0;

  @Listen('click-listen-body-click-capture-passive-false', { target: 'body', capture: true, passive: false })
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
    const ev = new Event('click-listen-body-click-capture-passive-false', { bubbles: true, cancelable: true, composed: true });
    const target: string = 'body';
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
        <p>Options: target=body event=click capture=true passive=false</p>
        <p>Counter: <span id="counter">{this.counter}</span></p>
      </div>
    );
  }
}
