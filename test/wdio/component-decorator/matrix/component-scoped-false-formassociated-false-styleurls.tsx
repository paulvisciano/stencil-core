// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-false-formassociated-false-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-false-formassociated-false-styleurls',
  scoped: false,
  formAssociated: false,
  styleUrls: ['matrix-gen.css', 'matrix-alt.css']
})
export class ComponentScopedFalseFormassociatedFalseStyleurls {
  render() {
    return <div>Permutation: - | ✗ | - | ✗ | - | ✓ | -</div>;
  }
}
