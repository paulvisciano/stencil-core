import { Component, Event, EventEmitter, h, Listen, State } from '@stencil/core';

@Component({ tag: 'event-bubbles-false-cancelable-composed-false', shadow: true })
export class EventBubblesFalseCancelableComposedFalse {
  @Event({ bubbles: false, cancelable: true, composed: false }) testEvent!: EventEmitter<void>;
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
        <p>Options: bubbles=false cancelable=true composed=false</p>
        <p>Counter: <span id="counter">{this.counter}</span></p>
      </div>
    );
  }
}
