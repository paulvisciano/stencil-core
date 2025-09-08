import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-formassociated-styleurls',
  shadow: false,
  scoped: true,
  formAssociated: true,
  styleUrls: ['matrix-d06.css']
})
export class ComponentShadowFalseScopedFormAssociatedStyleUrls {
  render() {
    return <div>Permutation: ✗ | ✓ | - | ✓ | - | ✓ | -</div>;
  }
}
