import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-formassociated-styleurls',
  shadow: true,
  formAssociated: true,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpShadowFormassociatedStyleurls {
  render() {
    return <div>Permutation: ✓ | - | - | ✓ | - | ✓ | -</div>;
  }
}
