// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-formassociated-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-formassociated-styleurls',
  formAssociated: true,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class ComponentFormassociatedStyleurls {
  render() {
    return <div>Permutation: - | - | - | ✓ | - | ✓ | -</div>;
  }
}
