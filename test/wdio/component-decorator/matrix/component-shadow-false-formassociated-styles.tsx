// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-formassociated-styles.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-formassociated-styles',
  shadow: false,
  formAssociated: true,
  styles: ':host{display:block}'
})
export class ComponentShadowFalseFormassociatedStyles {
  render() {
    return <div>Permutation: ✗ | - | - | ✓ | - | - | ✓</div>;
  }
}
