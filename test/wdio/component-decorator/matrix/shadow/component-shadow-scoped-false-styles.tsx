import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-false-styles',
  shadow: true,
  scoped: false,
  styles: '.matrix { color: #333; }'
})
export class ComponentShadowScopedFalseStyles {
  render() {
    return <div>Permutation: ✓ | ✗ | - | - | - | - | ✓</div>;
  }
}
