import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-formassociated',
  shadow: true,
  scoped: false,
  formAssociated: true
})
export class ComponentShadowScopedFalseFormAssociated {
  render() {
    return <div>Permutation: ✓ | ✗ | - | ✓ | - | - | -</div>;
  }
}
