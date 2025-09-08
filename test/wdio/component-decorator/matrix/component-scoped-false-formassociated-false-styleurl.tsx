// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-false-formassociated-false-styleurl.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-scoped-false-formassociated-false-styleurl',
  scoped: false,
  formAssociated: false,
  styleUrl: 'matrix-gen.css'
})
export class ComponentScopedFalseFormassociatedFalseStyleurl {
  render() {
    return <div>Permutation: - | ✗ | - | ✗ | ✓ | - | -</div>;
  }
}
