import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-formassociated-false-styles',
  shadow: false,
  scoped: true,
  formAssociated: false,
  styles: ':host{display:block}'
})
export class ComponentShadowFalseScopedFormAssociatedFalseStyles {
  render() {
    return <div>Permutation: ✗ | ✓ | - | ✗ | - | - | ✓</div>;
  }
}
