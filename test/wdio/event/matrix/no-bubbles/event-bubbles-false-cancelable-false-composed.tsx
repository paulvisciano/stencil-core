// filepath: /Users/paul.visciano/repos/core/test/wdio/event/matrix/no-bubbles/event-bubbles-false-cancelable-false-composed.tsx
import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({ tag: 'event-bubbles-false-cancelable-false-composed', shadow: true })
export class EventBubblesFalseCancelableFalseComposed {
  @Event({ bubbles: false, cancelable: false, composed: true }) change!: EventEmitter<string>;

  render() {
    return (
      <button onClick={() => this.change.emit('ping')}>
        Emit: bubbles=false cancelable=false composed=true
      </button>
    );
  }
}
