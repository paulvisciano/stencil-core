// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-false-formassociated-false.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-false-formassociated-false',
  scoped: false,
  formAssociated: false
})
export class ComponentScopedFalseFormassociatedFalse {
  render() {
    return <div>Permutation: - | ✗ | - | ✗ | - | - | -</div>;
  }
}
