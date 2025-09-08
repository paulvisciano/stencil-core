// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-false-formassociated.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-scoped-false-formassociated',
  scoped: false,
  formAssociated: true
})
export class ComponentScopedFalseFormassociated {
  render() {
    return <div>Permutation: - | ✗ | - | ✓ | - | - | -</div>;
  }
}
