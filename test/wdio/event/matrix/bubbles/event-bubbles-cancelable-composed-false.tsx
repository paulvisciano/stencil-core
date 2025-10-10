// filepath: /Users/paul.visciano/repos/core/test/wdio/event/matrix/bubbles/event-bubbles-cancelable-composed-false.tsx
import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({ tag: 'event-bubbles-cancelable-composed-false', shadow: true })
export class EventBubblesCancelableComposedFalse {
  @Event({ bubbles: true, cancelable: true, composed: false }) change!: EventEmitter<string>;

  render() {
    return (
      <button onClick={() => this.change.emit('ping')}>
        Emit: bubbles=true cancelable=true composed=false
      </button>
    );
  }
}
