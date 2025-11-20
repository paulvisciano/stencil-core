import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-false-styles',
  shadow: false,
  scoped: false,
  styles: ':host{display:block}'
})
export class CmpShadowFalseScopedFalseStyles {
  render() {
    return <div>Permutation: ✗ | ✗ | - | - | - | - | ✓</div>;
  }
}
