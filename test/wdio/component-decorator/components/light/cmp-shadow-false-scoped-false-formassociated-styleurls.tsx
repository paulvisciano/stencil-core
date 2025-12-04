import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-false-formassociated-styleurls',
  shadow: false,
  scoped: false,
  formAssociated: true,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpShadowFalseScopedFalseFormassociatedStyleurls {
  render() {
    return <div>Permutation: ✗ | ✗ | - | ✓ | - | ✓ | -</div>;
  }
}
