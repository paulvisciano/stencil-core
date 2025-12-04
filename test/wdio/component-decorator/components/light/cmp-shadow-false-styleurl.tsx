import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-styleurl',
  shadow: false,
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowFalseStyleurl {
  render() {
    return <div>Permutation: ✗ | - | - | - | ✓ | - | -</div>;
  }
}
