import { Component, h, State } from '@stencil/core';
import { MouseController } from './mouse-service';

@Component({ tag: 'cmp-mouse' })
export class MouseTracker extends MouseController {
  @State() mouseX: number = 0;
  @State() mouseY: number = 0;
  @State() moves: string[] = [];

  render() {
    return (
      <div>
        <div class="pos">{this.mouseX},{this.mouseY}</div>
        <div class="moves">{this.moves.join('|')}</div>
      </div>
    );
  }
}
