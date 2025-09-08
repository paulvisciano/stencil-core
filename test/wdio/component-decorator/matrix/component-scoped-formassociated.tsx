// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-formassociated.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-scoped-formassociated',
  scoped: true,
  formAssociated: true
})
export class ComponentScopedFormassociated {
  render() {
    return <div>Permutation: - | ✓ | - | ✓ | - | - | -</div>;
  }
}
