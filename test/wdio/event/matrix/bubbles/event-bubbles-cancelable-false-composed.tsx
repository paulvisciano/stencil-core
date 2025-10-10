// filepath: /Users/paul.visciano/repos/core/test/wdio/event/matrix/bubbles/event-bubbles-cancelable-false-composed.tsx
import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({ tag: 'event-bubbles-cancelable-false-composed', shadow: true })
export class EventBubblesCancelableFalseComposed {
  @Event({ bubbles: true, cancelable: false, composed: true }) change!: EventEmitter<string>;

  render() {
    return (
      <button onClick={() => this.change.emit('ping')}>
        Emit: bubbles=true cancelable=false composed=true
      </button>
    );
  }
}
