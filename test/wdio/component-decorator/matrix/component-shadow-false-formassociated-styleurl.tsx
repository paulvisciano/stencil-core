// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-formassociated-styleurl.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-formassociated-styleurl',
  shadow: false,
  formAssociated: true,
  styleUrl: 'matrix-gen.css'
})
export class ComponentShadowFalseFormassociatedStyleurl {
  render() {
    return <div>Permutation: ✗ | - | - | ✓ | ✓ | - | -</div>;
  }
}
