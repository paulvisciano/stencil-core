// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-formassociated-false.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-formassociated-false',
  shadow: false,
  formAssociated: false
})
export class ComponentShadowFalseFormassociatedFalse {
  render() {
    return <div>Permutation: ✗ | - | - | ✗ | - | - | -</div>;
  }
}
