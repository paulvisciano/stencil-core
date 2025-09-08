import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-styles',
  shadow: false,
  scoped: true,
  styles: ':host{display:block}'
})
export class ComponentShadowFalseScopedStyles {
  render() {
    return <div>Permutation: ✗ | ✓ | - | - | - | - | ✓</div>;
  }
}
