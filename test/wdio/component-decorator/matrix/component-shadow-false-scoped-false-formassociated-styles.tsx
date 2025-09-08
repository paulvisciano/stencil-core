// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-scoped-false-formassociated-styles.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-false-formassociated-styles',
  shadow: false,
  scoped: false,
  formAssociated: true,
  styles: ':host{display:block}'
})
export class ComponentShadowFalseScopedFalseFormassociatedStyles {
  render() {
    return <div>Permutation: ✗ | ✗ | - | ✓ | - | - | ✓</div>;
  }
}
