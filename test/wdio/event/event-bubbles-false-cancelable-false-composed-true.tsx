import { Component, Event, EventEmitter, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'event-bubbles-false-cancelable-false-composed-true',
})
export class EventBubblesFalseCancelableFalseComposedTrue {
  @Event({
    bubbles: false,
    cancelable: false,
    composed: true,
  })
  testEvent: EventEmitter;

  @State() counter = 0;

  @Listen('testEvent')
  onTestEvent() {
    this.counter++;
  }

  componentDidLoad() {
    this.testEvent.emit();
  }

  render() {
    return (
      <div>
        Counter: <span id="counter">{this.counter}</span>
      </div>
    );
  }
}
