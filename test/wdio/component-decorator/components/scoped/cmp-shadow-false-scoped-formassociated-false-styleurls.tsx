import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-formassociated-false-styleurls',
  shadow: false,
  scoped: true,
  formAssociated: false,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpShadowFalseScopedFormassociatedFalseStyleurls {
  render() {
    return <div>Permutation: ✗ | ✓ | - | ✗ | - | ✓ | -</div>;
  }
}
