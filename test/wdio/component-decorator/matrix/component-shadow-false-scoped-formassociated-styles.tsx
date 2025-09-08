import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-formassociated-styles',
  shadow: false,
  scoped: true,
  formAssociated: true,
  styles: ':host{display:block}'
})
export class ComponentShadowFalseScopedFormAssociatedStyles {
  render() {
    return <div>Permutation: ✗ | ✓ | - | ✓ | - | - | ✓</div>;
  }
}
