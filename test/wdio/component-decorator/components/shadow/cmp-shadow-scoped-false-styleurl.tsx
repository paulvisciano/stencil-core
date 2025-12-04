import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-styleurl',
  shadow: true,
  scoped: false,
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowScopedFalseStyleurl {
  render() {
    return <div>Permutation: ✓ | ✗ | - | - | ✓ | - | -</div>;
  }
}
