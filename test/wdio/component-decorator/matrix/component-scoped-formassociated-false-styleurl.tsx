// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-formassociated-false-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-formassociated-false-styleurl',
  scoped: true,
  formAssociated: false,
  styleUrl: 'matrix-gen.css'
})
export class ComponentScopedFormassociatedFalseStyleurl {
  render() {
    return <div>Permutation: - | ✓ | - | ✗ | ✓ | - | -</div>;
  }
}
