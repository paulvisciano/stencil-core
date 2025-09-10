// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-formassociated-false-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-formassociated-false-styleurls',
  scoped: true,
  formAssociated: false,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class ComponentScopedFormassociatedFalseStyleurls {
  render() {
    return <div>Permutation: - | ✓ | - | ✗ | - | ✓ | -</div>;
  }
}
