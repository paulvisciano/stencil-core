import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-formassociated',
  shadow: true,
  scoped: true,
  formAssociated: true
})
export class ComponentShadowScopedFormAssociated {
  render() {
    return <div>Permutation: ✓ | ✓ | - | ✓ | - | - | -</div>;
  }
}
