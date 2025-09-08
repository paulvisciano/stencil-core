// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-formassociated-false-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-formassociated-false-styles',
  shadow: false,
  formAssociated: false,
  styles: ':host{display:block}'
})
export class ComponentShadowFalseFormassociatedFalseStyles {
  render() {
    return <div>Permutation: ✗ | - | - | ✗ | - | - | ✓</div>;
  }
}
