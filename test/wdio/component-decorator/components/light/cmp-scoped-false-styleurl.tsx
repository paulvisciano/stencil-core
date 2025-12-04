import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-styleurl',
  scoped: false,
  styleUrl: '../matrix-gen.css'
})
export class CmpScopedFalseStyleurl {
  render() {
    return <div>Permutation: - | ✗ | - | - | ✓ | - | -</div>;
  }
}
