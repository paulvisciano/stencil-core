import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-formassociated-false-styleurl',
  shadow: false,
  scoped: true,
  formAssociated: false,
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowFalseScopedFormassociatedFalseStyleurl {
  render() {
    return <div>Permutation: ✗ | ✓ | - | ✗ | ✓ | - | -</div>;
  }
}
