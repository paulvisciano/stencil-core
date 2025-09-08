// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-false-formassociated-styles.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-scoped-false-formassociated-styles',
  scoped: false,
  formAssociated: true,
  styles: ':host{display:block}'
})
export class ComponentScopedFalseFormassociatedStyles {
  render() {
    return <div>Permutation: - | ✗ | - | ✓ | - | - | ✓</div>;
  }
}
