import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-formassociated-styleurls',
  shadow: true,
  scoped: true,
  formAssociated: true,
  styleUrls: ['cmp-m006.css']
})
export class ComponentShadowScopedFormAssociatedStyleUrls {
  render() {
    return <div>Permutation: ✓ | ✓ | - | ✓ | - | ✓ | -</div>;
  }
}
