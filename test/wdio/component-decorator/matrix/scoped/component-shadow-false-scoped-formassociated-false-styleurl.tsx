import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-formassociated-false-styleurl',
  shadow: false,
  scoped: true,
  formAssociated: false,
  styleUrl: '../matrix-gen.css'
})
export class ComponentShadowFalseScopedFormAssociatedFalseStyleUrl {
  render() {
    return <div>Permutation: ✗ | ✓ | - | ✗ | ✓ | - | -</div>;
  }
}
