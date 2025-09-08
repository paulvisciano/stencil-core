// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-false-formassociated-styleurl.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-scoped-false-formassociated-styleurl',
  scoped: false,
  formAssociated: true,
  styleUrl: 'matrix-gen.css'
})
export class ComponentScopedFalseFormassociatedStyleurl {
  render() {
    return <div>Permutation: - | ✗ | - | ✓ | ✓ | - | -</div>;
  }
}
