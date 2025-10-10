// filepath: /Users/paul.visciano/repos/core/test/wdio/event/matrix/no-bubbles/event-bubbles-false-cancelable-composed-false.tsx
import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({ tag: 'event-bubbles-false-cancelable-composed-false', shadow: true })
export class EventBubblesFalseCancelableComposedFalse {
  @Event({ bubbles: false, cancelable: true, composed: false }) change!: EventEmitter<string>;

  render() {
    return (
      <button onClick={() => this.change.emit('ping')}>
        Emit: bubbles=false cancelable=true composed=false
      </button>
    );
  }
}
