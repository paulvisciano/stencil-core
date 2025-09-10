import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-formassociated-styleurl',
  shadow: false,
  scoped: true,
  formAssociated: true,
  styleUrl: 'matrix-gen.css'
})
export class ComponentShadowFalseScopedFormAssociatedStyleUrl {
  render() {
    return <div>Permutation: ✗ | ✓ | - | ✓ | ✓ | - | -</div>;
  }
}
