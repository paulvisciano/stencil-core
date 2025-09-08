import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-formassociated-styleurl',
  shadow: false,
  scoped: true,
  formAssociated: true,
  styleUrl: 'matrix-d05.css'
})
export class ComponentShadowFalseScopedFormAssociatedStyleUrl {
  render() {
    return <div>Permutation: ✗ | ✓ | - | ✓ | ✓ | - | -</div>;
  }
}
