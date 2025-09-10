// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/shadow/cmp-shadow-scoped-false-formassociated-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-formassociated-styleurls',
  shadow: true,
  scoped: false,
  formAssociated: true,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpShadowScopedFalseFormassociatedStyleurls {
  render() {
    return <div>Permutation: ✓ | ✗ | - | ✓ | - | ✓ | -</div>;
  }
}
