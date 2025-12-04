import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-formassociated-styleurl',
  scoped: true,
  formAssociated: true,
  styleUrl: '../matrix-gen.css'
})
export class CmpScopedFormassociatedStyleurl {
  render() {
    return <div>Permutation: - | ✓ | - | ✓ | ✓ | - | -</div>;
  }
}
