import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-styleurl',
  shadow: false,
  scoped: true,
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowFalseScopedStyleurl {
  render() {
    return <div>Permutation: ✗ | ✓ | - | - | ✓ | - | -</div>;
  }
}
