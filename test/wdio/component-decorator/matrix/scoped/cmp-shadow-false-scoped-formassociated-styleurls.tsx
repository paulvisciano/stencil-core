// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/scoped/cmp-shadow-false-scoped-formassociated-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-formassociated-styleurls',
  shadow: false,
  scoped: true,
  formAssociated: true,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpShadowFalseScopedFormassociatedStyleurls {
  render() {
    return <div>Permutation: ✗ | ✓ | - | ✓ | - | ✓ | -</div>;
  }
}
