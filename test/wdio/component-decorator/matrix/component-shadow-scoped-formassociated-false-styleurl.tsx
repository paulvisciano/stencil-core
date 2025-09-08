import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-formassociated-false-styleurl',
  shadow: true,
  scoped: true,
  formAssociated: false,
  styleUrl: 'cmp-m009.css'
})
export class ComponentShadowScopedFormAssociatedFalseStyleUrl {
  render() {
    return <div>Permutation: ✓ | ✓ | - | ✗ | ✓ | - | -</div>;
  }
}
