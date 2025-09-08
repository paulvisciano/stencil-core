import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-formassociated-false-styleurls',
  shadow: false,
  scoped: true,
  formAssociated: false,
  styleUrls: ['matrix-d10.css']
})
export class ComponentShadowFalseScopedFormAssociatedFalseStyleUrls {
  render() {
    return <div>Permutation: ✗ | ✓ | - | ✗ | - | ✓ | -</div>;
  }
}
