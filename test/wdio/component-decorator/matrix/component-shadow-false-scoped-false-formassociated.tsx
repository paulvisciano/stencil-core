// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-scoped-false-formassociated.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-false-formassociated',
  shadow: false,
  scoped: false,
  formAssociated: true
})
export class ComponentShadowFalseScopedFalseFormassociated {
  render() {
    return <div>Permutation: ✗ | ✗ | - | ✓ | - | - | -</div>;
  }
}
