import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-formassociated',
  shadow: true,
  formAssociated: true
})
export class ComponentShadowFormAssociated {
  render() {
    return <div>Permutation: ✓ | - | - | ✓ | - | - | -</div>;
  }
}
