import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-formassociated',
  shadow: false,
  scoped: true,
  formAssociated: true
})
export class ComponentShadowFalseScopedFormAssociated {
  render() {
    return <div>Permutation: ✗ | ✓ | - | ✓ | - | - | -</div>;
  }
}
