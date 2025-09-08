import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-formassociated-false',
  shadow: true,
  scoped: true,
  formAssociated: false
})
export class ComponentShadowScopedFormassociatedFalse {
  render() {
    return <div>Permutation: ✓ | ✓ | - | ✗ | - | - | -</div>;
  }
}
