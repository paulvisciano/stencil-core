// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-formassociated-false.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-scoped-formassociated-false',
  scoped: true,
  formAssociated: false
})
export class ComponentScopedFormassociatedFalse {
  render() {
    return <div>Permutation: - | ✓ | - | ✗ | - | - | -</div>;
  }
}
