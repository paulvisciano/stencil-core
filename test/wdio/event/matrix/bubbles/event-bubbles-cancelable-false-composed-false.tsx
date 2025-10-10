// filepath: /Users/paul.visciano/repos/core/test/wdio/event/matrix/bubbles/event-bubbles-cancelable-false-composed-false.tsx
import { Component, Event, EventEmitter, h, Listen, State } from '@stencil/core';

@Component({ tag: 'event-bubbles-cancelable-false-composed-false', shadow: true })
export class EventBubblesCancelableFalseComposedFalse {
  @Event({ bubbles: true, cancelable: false, composed: false }) testEvent!: EventEmitter<void>;
  @State() counter = 0;

  @Listen('testEvent')
  onTestEvent() {
    this.counter++;
  }

  componentDidLoad() {
    // trigger an event once loaded so tests can assert the listener ran
    this.testEvent.emit();
  }

  render() {
    return (
      <div>
        <p>Options: bubbles=true cancelable=false composed=false</p>
        <p>Counter: <span id="counter">{this.counter}</span></p>
      </div>
    );
  }
}
