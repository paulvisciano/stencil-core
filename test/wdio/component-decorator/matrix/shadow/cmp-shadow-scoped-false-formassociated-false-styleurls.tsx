// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/shadow/cmp-shadow-scoped-false-formassociated-false-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-formassociated-false-styleurls',
  shadow: true,
  scoped: false,
  formAssociated: false,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpShadowScopedFalseFormassociatedFalseStyleurls {
  render() {
    return <div>Permutation: ✓ | ✗ | - | ✗ | - | ✓ | -</div>;
  }
}
