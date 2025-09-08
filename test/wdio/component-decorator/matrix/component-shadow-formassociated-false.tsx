import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-formassociated-false',
  shadow: true,
  formAssociated: false
})
export class ComponentShadowFormAssociatedFalse {
  render() {
    return <div>Permutation: ✓ | - | - | ✗ | - | - | -</div>;
  }
}
