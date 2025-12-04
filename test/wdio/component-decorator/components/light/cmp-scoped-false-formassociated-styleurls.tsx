import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-formassociated-styleurls',
  scoped: false,
  formAssociated: true,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpScopedFalseFormassociatedStyleurls {
  render() {
    return <div>Permutation: - | ✗ | - | ✓ | - | ✓ | -</div>;
  }
}
