import { Component, Event, EventEmitter, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'event-bubbles-true-cancelable-true-composed-false',
})
export class EventBubblesTrueCancelableTrueComposedFalse {
  @Event({
    bubbles: true,
    cancelable: true,
    composed: false,
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
