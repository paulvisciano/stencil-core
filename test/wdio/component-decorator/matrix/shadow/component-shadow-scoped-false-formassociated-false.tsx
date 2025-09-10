import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-formassociated-false',
  shadow: true,
  scoped: false,
  formAssociated: false
})
export class ComponentShadowScopedFalseFormAssociatedFalse {
  render() {
    return <div>Permutation: ✓ | ✗ | - | ✗ | - | - | -</div>;
  }
}
