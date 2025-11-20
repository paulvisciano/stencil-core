import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-formassociated-styleurl',
  shadow: false,
  formAssociated: true,
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowFalseFormassociatedStyleurl {
  render() {
    return <div>Permutation: ✗ | - | - | ✓ | ✓ | - | -</div>;
  }
}
