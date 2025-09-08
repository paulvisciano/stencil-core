// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-formassociated-false-styles.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-scoped-formassociated-false-styles',
  scoped: true,
  formAssociated: false,
  styles: ':host{display:block}'
})
export class ComponentScopedFormassociatedFalseStyles {
  render() {
    return <div>Permutation: - | ✓ | - | ✗ | - | - | ✓</div>;
  }
}
