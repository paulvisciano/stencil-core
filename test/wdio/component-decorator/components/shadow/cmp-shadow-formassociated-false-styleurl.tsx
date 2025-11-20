import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-formassociated-false-styleurl',
  shadow: true,
  formAssociated: false,
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowFormassociatedFalseStyleurl {
  render() {
    return <div>Permutation: ✓ | - | - | ✗ | ✓ | - | -</div>;
  }
}
