// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-scoped-false-formassociated-styleurl.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-false-formassociated-styleurl',
  shadow: false,
  scoped: false,
  formAssociated: true,
  styleUrl: 'matrix-gen.css'
})
export class ComponentShadowFalseScopedFalseFormassociatedStyleurl {
  render() {
    return <div>Permutation: ✗ | ✗ | - | ✓ | ✓ | - | -</div>;
  }
}
