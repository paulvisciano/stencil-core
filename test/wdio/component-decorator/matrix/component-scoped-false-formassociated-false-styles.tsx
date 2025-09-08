// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-false-formassociated-false-styles.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-scoped-false-formassociated-false-styles',
  scoped: false,
  formAssociated: false,
  styles: ':host{display:block}'
})
export class ComponentScopedFalseFormassociatedFalseStyles {
  render() {
    return <div>Permutation: - | ✗ | - | ✗ | - | - | ✓</div>;
  }
}
