import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-formassociated-false-styles',
  shadow: true,
  scoped: false,
  formAssociated: false,
  styles: '.matrix { color: orange; }'
})
export class ComponentShadowScopedFalseFormAssociatedFalseStyles {
  render() {
    return <div>Permutation: ✓ | ✗ | - | ✗ | - | - | ✓</div>;
  }
}
