import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-formassociated-false-styles',
  shadow: true,
  scoped: true,
  formAssociated: false,
  styles: ':host{display:block}'
})
export class ComponentShadowScopedFormassociatedFalseStyles {
  render() {
    return <div>Permutation: ✓ | ✓ | - | ✗ | - | - | ✓</div>;
  }
}
