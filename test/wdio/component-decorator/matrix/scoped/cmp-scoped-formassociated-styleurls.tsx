// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/scoped/cmp-scoped-formassociated-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-formassociated-styleurls',
  scoped: true,
  formAssociated: true,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpScopedFormassociatedStyleurls {
  render() {
    return <div>Permutation: - | ✓ | - | ✓ | - | ✓ | -</div>;
  }
}
