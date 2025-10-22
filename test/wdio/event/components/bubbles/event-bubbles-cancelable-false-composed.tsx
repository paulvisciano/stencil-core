import { Component, Event, EventEmitter, h, Listen, State } from '@stencil/core';

@Component({ tag: 'event-bubbles-cancelable-false-composed', shadow: true })
export class EventBubblesCancelableFalseComposed {
  @Event({ bubbles: true, cancelable: false, composed: true }) testEvent!: EventEmitter<void>;
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
        <p>Options: bubbles=true cancelable=false composed=true</p>
        <p>Counter: <span id="counter">{this.counter}</span></p>
      </div>
    );
  }
}
