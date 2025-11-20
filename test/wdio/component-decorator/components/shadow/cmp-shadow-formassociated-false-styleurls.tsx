import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-formassociated-false-styleurls',
  shadow: true,
  formAssociated: false,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpShadowFormassociatedFalseStyleurls {
  render() {
    return <div>Permutation: ✓ | - | - | ✗ | - | ✓ | -</div>;
  }
}
