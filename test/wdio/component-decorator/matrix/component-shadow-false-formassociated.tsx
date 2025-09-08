// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-formassociated.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-formassociated',
  shadow: false,
  formAssociated: true
})
export class ComponentShadowFalseFormassociated {
  render() {
    return <div>Permutation: ✗ | - | - | ✓ | - | - | -</div>;
  }
}
