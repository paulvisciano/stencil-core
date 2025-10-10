/**
 * Example Stencil component demonstrating a proposed reactive controller API
 * via a `@Controller` decorated class (see `mouseController.ts`).
 *
 * NOTE: This is illustrative only. The `@Controller` decorator and implicit
 * lifecycle wiring are not implemented in Stencil yet. This file is designed
 * to be non-breaking: it does not import any non-existent runtime symbols.
 */

import { Component, h, Fragment, State } from '@stencil/core';
import { Controller } from './controller.js';
import { MouseController } from './mouseController.js';

@Component({
  tag: 'mouse-tracker',
  shadow: true,
})
export class MouseTrackerComponent {
  // Host update batching (unchanged conceptually)
  private _pendingUpdate = false;

  requestUpdate() {
    if (this._pendingUpdate) return;
    this._pendingUpdate = true;
    queueMicrotask(() => {
      this._pendingUpdate = false;
      this.__tick++; // trigger re-render
    });
  }

  @State() private __tick = 0;

  // Controllers declared as properties using @Controller decorator
  @Controller() mouse = new MouseController(this);

  render() {
    // Access controllers inside render
    const { x, y } = this.mouse.pos;
    
    return (
      <Fragment>
        <h3>Mouse Position</h3>
        <pre>
          x: {x}\n
          y: {y}
        </pre>
      </Fragment>
    );
  }
}
