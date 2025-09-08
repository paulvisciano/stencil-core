// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-formassociated-styleurls.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-formassociated-styleurls',
  formAssociated: true,
  styleUrls: ['matrix-gen.css']
})
export class ComponentFormassociatedStyleurls {
  render() {
    return <div>Permutation: - | - | - | ✓ | - | ✓ | -</div>;
  }
}
