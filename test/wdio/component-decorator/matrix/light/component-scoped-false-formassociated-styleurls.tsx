// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-false-formassociated-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-false-formassociated-styleurls',
  scoped: false,
  formAssociated: true,
  styleUrls: ['matrix-gen.css', 'matrix-alt.css']
})
export class ComponentScopedFalseFormassociatedStyleurls {
  render() {
    return <div>Permutation: - | ✗ | - | ✓ | - | ✓ | -</div>;
  }
}
