// filepath: /Users/paul.visciano/repos/core/test/wdio/event/matrix/no-bubbles/event-bubbles-false-cancelable-composed.tsx
import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({ tag: 'event-bubbles-false-cancelable-composed', shadow: true })
export class EventBubblesFalseCancelableComposed {
  @Event({ bubbles: false, cancelable: true, composed: true }) change!: EventEmitter<string>;

  render() {
    return (
      <button onClick={() => this.change.emit('ping')}>
        Emit: bubbles=false cancelable=true composed=true
      </button>
    );
  }
}
