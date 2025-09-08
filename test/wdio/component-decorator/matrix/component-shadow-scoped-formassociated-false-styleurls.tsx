import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-formassociated-false-styleurls',
  shadow: true,
  scoped: true,
  formAssociated: false,
  styleUrls: ['cmp-m010.css']
})
export class ComponentShadowScopedFormAssociatedFalseStyleUrls {
  render() {
    return <div>Permutation: ✓ | ✓ | - | ✗ | - | ✓ | -</div>;
  }
}
