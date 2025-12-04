import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-styleurl',
  scoped: true,
  styleUrl: '../matrix-gen.css'
})
export class CmpScopedStyleurl {
  render() {
    return <div>Permutation: - | ✓ | - | - | ✓ | - | -</div>;
  }
}
