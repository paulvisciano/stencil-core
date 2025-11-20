import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-formassociated-styleurls',
  shadow: false,
  formAssociated: true,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpShadowFalseFormassociatedStyleurls {
  render() {
    return <div>Permutation: ✗ | - | - | ✓ | - | ✓ | -</div>;
  }
}
