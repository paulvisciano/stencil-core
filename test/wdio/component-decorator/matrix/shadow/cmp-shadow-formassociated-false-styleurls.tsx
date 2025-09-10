// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/shadow/cmp-shadow-formassociated-false-styleurls.tsx
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
