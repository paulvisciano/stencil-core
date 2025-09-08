import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-formassociated-styles',
  shadow: true,
  scoped: false,
  formAssociated: true,
  styles: '.matrix { color: purple; }'
})
export class ComponentShadowScopedFalseFormAssociatedStyles {
  render() {
    return <div>Permutation: ✓ | ✗ | - | ✓ | - | - | ✓</div>;
  }
}
