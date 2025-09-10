import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-formassociated-false-styleurls',
  shadow: true,
  scoped: false,
  formAssociated: false,
  styleUrls: ['matrix-gen.css', 'matrix-alt.css']
})
export class ComponentShadowScopedFalseFormAssociatedFalseStyleUrls {
  render() {
    return <div>Permutation: ✓ | ✗ | - | ✗ | - | ✓ | -</div>;
  }
}
