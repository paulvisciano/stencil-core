import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-formassociated-false-styleurl',
  scoped: true,
  formAssociated: false,
  styleUrl: '../matrix-gen.css'
})
export class CmpScopedFormassociatedFalseStyleurl {
  render() {
    return <div>Permutation: - | ✓ | - | ✗ | ✓ | - | -</div>;
  }
}
