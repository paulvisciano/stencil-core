import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-formassociated-styleurls',
  shadow: false,
  scoped: true,
  formAssociated: true,
  styleUrls: ['matrix-gen.css', 'matrix-alt.css']
})
export class ComponentShadowFalseScopedFormAssociatedStyleUrls {
  render() {
    return <div>Permutation: ✗ | ✓ | - | ✓ | - | ✓ | -</div>;
  }
}
