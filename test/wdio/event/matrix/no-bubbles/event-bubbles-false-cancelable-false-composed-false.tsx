// filepath: /Users/paul.visciano/repos/core/test/wdio/event/matrix/no-bubbles/event-bubbles-false-cancelable-false-composed-false.tsx
import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({ tag: 'event-bubbles-false-cancelable-false-composed-false', shadow: true })
export class EventBubblesFalseCancelableFalseComposedFalse {
  @Event({ bubbles: false, cancelable: false, composed: false }) change!: EventEmitter<string>;

  render() {
    return (
      <button onClick={() => this.change.emit('ping')}>
        Emit: bubbles=false cancelable=false composed=false
      </button>
    );
  }
}
