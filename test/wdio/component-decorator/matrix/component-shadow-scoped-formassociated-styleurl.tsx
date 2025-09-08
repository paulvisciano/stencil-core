import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-formassociated-styleurl',
  shadow: true,
  scoped: true,
  formAssociated: true,
  styleUrl: 'cmp-m005.css'
})
export class ComponentShadowScopedFormAssociatedStyleUrl {
  render() {
    return <div>Permutation: ✓ | ✓ | - | ✓ | ✓ | - | -</div>;
  }
}
