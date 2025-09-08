import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-styles',
  shadow: true,
  scoped: true,
  styles: ':host{display:block}'
})
export class ComponentShadowScopedStyles {
  render() {
    return <div>Permutation: ✓ | ✓ | - | - | - | - | ✓</div>;
  }
}
