// filepath: /Users/paul.visciano/repos/core/test/wdio/event/matrix/bubbles/event-bubbles-cancelable-false-composed-false.tsx
import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({ tag: 'event-bubbles-cancelable-false-composed-false', shadow: true })
export class EventBubblesCancelableFalseComposedFalse {
  @Event({ bubbles: true, cancelable: false, composed: false }) change!: EventEmitter<string>;

  render() {
    return (
      <button onClick={() => this.change.emit('ping')}>
        Emit: bubbles=true cancelable=false composed=false
      </button>
    );
  }
}
