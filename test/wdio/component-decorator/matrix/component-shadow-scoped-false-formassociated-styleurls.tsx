import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-formassociated-styleurls',
  shadow: true,
  scoped: false,
  formAssociated: true,
  styleUrls: ['matrix-b2.css']
})
export class ComponentShadowScopedFalseFormAssociatedStyleUrls {
  render() {
    return <div>Permutation: ✓ | ✗ | - | ✓ | - | ✓ | -</div>;
  }
}
