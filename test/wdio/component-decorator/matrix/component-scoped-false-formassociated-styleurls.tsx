// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-false-formassociated-styleurls.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-scoped-false-formassociated-styleurls',
  scoped: false,
  formAssociated: true,
  styleUrls: ['matrix-gen.css']
})
export class ComponentScopedFalseFormassociatedStyleurls {
  render() {
    return <div>Permutation: - | ✗ | - | ✓ | - | ✓ | -</div>;
  }
}
