import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-formassociated-false-styleurls',
  shadow: true,
  formAssociated: false,
  styleUrls: ['matrix-gen.css', 'matrix-alt.css']
})
export class ComponentShadowFormAssociatedFalseStyleUrls {
  render() {
    return <div>Permutation: ✓ | - | - | ✗ | - | ✓ | -</div>;
  }
}
