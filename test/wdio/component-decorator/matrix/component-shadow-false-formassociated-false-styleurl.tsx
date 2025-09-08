// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-formassociated-false-styleurl.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-formassociated-false-styleurl',
  shadow: false,
  formAssociated: false,
  styleUrl: 'matrix-gen.css'
})
export class ComponentShadowFalseFormassociatedFalseStyleurl {
  render() {
    return <div>Permutation: ✗ | - | - | ✗ | ✓ | - | -</div>;
  }
}
