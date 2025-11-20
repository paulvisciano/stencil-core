import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-formassociated-false-styleurls',
  scoped: true,
  formAssociated: false,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpScopedFormassociatedFalseStyleurls {
  render() {
    return <div>Permutation: - | ✓ | - | ✗ | - | ✓ | -</div>;
  }
}
