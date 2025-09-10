import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-formassociated-styleurl',
  shadow: true,
  scoped: false,
  formAssociated: true,
  styleUrl: '../matrix-gen.css'
})
export class ComponentShadowScopedFalseFormAssociatedStyleUrl {
  render() {
    return <div>Permutation: ✓ | ✗ | - | ✓ | ✓ | - | -</div>;
  }
}
