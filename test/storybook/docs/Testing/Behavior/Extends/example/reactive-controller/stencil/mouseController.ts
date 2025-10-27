/**
 * Example Stencil reactive controller using a proposed `@Controller` decorator.
 * This mirrors the Lit `MouseController` example but demonstrates the *intended*
 * Stencil authoring style. The `@Controller` decorator and related lifecycle
 * plumbing do not exist yet; everything here is illustrative and kept
 * self‑contained so it will not break the build.
 */

import { Controller, StencilReactiveController, StencilReactiveControllerHost } from './controller.js';

export class MouseController implements StencilReactiveController {
  pos = { x: 0, y: 0 };

  private _onMouseMove = (ev: MouseEvent) => {
    this.pos = { x: ev.clientX, y: ev.clientY };
    this.host.requestUpdate?.();
  };

  constructor(private host: StencilReactiveControllerHost) {}

  hostConnected() { window.addEventListener('mousemove', this._onMouseMove); }
  hostDisconnected() { window.removeEventListener('mousemove', this._onMouseMove); }
}
