// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-formassociated-false-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-formassociated-false-styleurls',
  formAssociated: false,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class ComponentFormassociatedFalseStyleurls {
  render() {
    return <div>Permutation: - | - | - | ✗ | - | ✓ | -</div>;
  }
}
