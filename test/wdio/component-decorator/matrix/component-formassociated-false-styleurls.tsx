// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-formassociated-false-styleurls.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-formassociated-false-styleurls',
  formAssociated: false,
  styleUrls: ['matrix-gen.css']
})
export class ComponentFormassociatedFalseStyleurls {
  render() {
    return <div>Permutation: - | - | - | ✗ | - | ✓ | -</div>;
  }
}
