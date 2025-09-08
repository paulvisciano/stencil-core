import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-formassociated-false-styleurl',
  shadow: true,
  formAssociated: false,
  styleUrl: 'matrix-c9.css'
})
export class ComponentShadowFormAssociatedFalseStyleUrl {
  render() {
    return <div>Permutation: ✓ | - | - | ✗ | ✓ | - | -</div>;
  }
}
