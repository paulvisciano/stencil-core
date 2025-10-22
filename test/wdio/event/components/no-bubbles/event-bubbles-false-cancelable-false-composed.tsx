// filepath: /Users/paul.visciano/repos/core/test/wdio/event/components/no-bubbles/event-bubbles-false-cancelable-false-composed.tsx
import { Component, Event, EventEmitter, h, Listen, State } from '@stencil/core';

@Component({ tag: 'event-bubbles-false-cancelable-false-composed', shadow: true })
export class EventBubblesFalseCancelableFalseComposed {
  @Event({ bubbles: false, cancelable: false, composed: true }) testEvent!: EventEmitter<void>;
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
        <p>Options: bubbles=false cancelable=false composed=true</p>
        <p>Counter: <span id="counter">{this.counter}</span></p>
      </div>
    );
  }
}
