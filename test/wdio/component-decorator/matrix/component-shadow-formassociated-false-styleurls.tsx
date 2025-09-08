import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-formassociated-false-styleurls',
  shadow: true,
  formAssociated: false,
  styleUrls: ['matrix-c10.css']
})
export class ComponentShadowFormAssociatedFalseStyleUrls {
  render() {
    return <div>Permutation: ✓ | - | - | ✗ | - | ✓ | -</div>;
  }
}
