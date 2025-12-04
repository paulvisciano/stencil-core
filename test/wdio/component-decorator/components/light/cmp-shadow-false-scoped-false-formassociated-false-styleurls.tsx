import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-false-formassociated-false-styleurls',
  shadow: false,
  scoped: false,
  formAssociated: false,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpShadowFalseScopedFalseFormassociatedFalseStyleurls {
  render() {
    return <div>Permutation: ✗ | ✗ | - | ✗ | - | ✓ | -</div>;
  }
}
