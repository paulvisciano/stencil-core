// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-scoped-false-formassociated-false.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-false-formassociated-false',
  shadow: false,
  scoped: false,
  formAssociated: false
})
export class ComponentShadowFalseScopedFalseFormassociatedFalse {
  render() {
    return <div>Permutation: ✗ | ✗ | - | ✗ | - | - | -</div>;
  }
}
