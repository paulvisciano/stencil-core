// filepath: /Users/paul.visciano/repos/core/test/wdio/event/matrix/bubbles/event-bubbles-cancelable-composed.tsx
import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({ tag: 'event-bubbles-cancelable-composed', shadow: true })
export class EventBubblesCancelableComposed {
  @Event({ bubbles: true, cancelable: true, composed: true }) change!: EventEmitter<string>;

  render() {
    return (
      <button onClick={() => this.change.emit('ping')}>
        Emit: bubbles=true cancelable=true composed=true
      </button>
    );
  }
}
