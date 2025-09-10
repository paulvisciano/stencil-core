import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-formassociated-false-styleurl',
  shadow: true,
  formAssociated: false,
  styleUrl: 'matrix-gen.css'
})
export class ComponentShadowFormAssociatedFalseStyleUrl {
  render() {
    return <div>Permutation: ✓ | - | - | ✗ | ✓ | - | -</div>;
  }
}
