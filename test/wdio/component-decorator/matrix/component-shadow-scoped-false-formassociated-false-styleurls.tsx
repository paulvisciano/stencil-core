import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-formassociated-false-styleurls',
  shadow: true,
  scoped: false,
  formAssociated: false,
  styleUrls: ['matrix-b6.css']
})
export class ComponentShadowScopedFalseFormAssociatedFalseStyleUrls {
  render() {
    return <div>Permutation: ✓ | ✗ | - | ✗ | - | ✓ | -</div>;
  }
}
