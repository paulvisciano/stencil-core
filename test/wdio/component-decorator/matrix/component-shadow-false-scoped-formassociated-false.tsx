import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-formassociated-false',
  shadow: false,
  scoped: true,
  formAssociated: false
})
export class ComponentShadowFalseScopedFormAssociatedFalse {
  render() {
    return <div>Permutation: ✗ | ✓ | - | ✗ | - | - | -</div>;
  }
}
