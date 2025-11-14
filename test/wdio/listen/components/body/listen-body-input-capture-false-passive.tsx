import { Component, Element, h, Listen, State } from '@stencil/core';

@Component({ tag: 'listen-body-input-capture-false-passive', shadow: true })
export class ListenBodyInputCaptureFalsePassive {
  @Element() el!: HTMLElement;
  @State() counter = 0;

  @Listen('input-listen-body-input-capture-false-passive', { target: 'body', capture: false, passive: true })
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
    const ev = new Event('input-listen-body-input-capture-false-passive', { bubbles: true, cancelable: true, composed: true });
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
        <p>Options: target=body event=input capture=false passive=true</p>
        <p>Counter: <span id="counter">{this.counter}</span></p>
      </div>
    );
  }
}
