// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-formassociated-false-styleurls.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-scoped-formassociated-false-styleurls',
  scoped: true,
  formAssociated: false,
  styleUrls: ['matrix-gen.css']
})
export class ComponentScopedFormassociatedFalseStyleurls {
  render() {
    return <div>Permutation: - | ✓ | - | ✗ | - | ✓ | -</div>;
  }
}
