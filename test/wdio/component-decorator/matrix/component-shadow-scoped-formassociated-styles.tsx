import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-formassociated-styles',
  shadow: true,
  scoped: true,
  formAssociated: true,
  styles: ':host{display:block}'
})
export class ComponentShadowScopedFormAssociatedStyles {
  render() {
    return <div>Permutation: ✓ | ✓ | - | ✓ | - | - | ✓</div>;
  }
}
