// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-formassociated-false-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-formassociated-false-styleurls',
  formAssociated: false,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpFormassociatedFalseStyleurls {
  render() {
    return <div>Permutation: - | - | - | ✗ | - | ✓ | -</div>;
  }
}
