import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-formassociated-styleurls',
  formAssociated: true,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpFormassociatedStyleurls {
  render() {
    return <div>Permutation: - | - | - | ✓ | - | ✓ | -</div>;
  }
}
