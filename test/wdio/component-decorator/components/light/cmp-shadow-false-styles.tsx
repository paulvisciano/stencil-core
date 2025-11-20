import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-styles',
  shadow: false,
  styles: ':host{display:block}'
})
export class CmpShadowFalseStyles {
  render() {
    return <div>Permutation: ✗ | - | - | - | - | - | ✓</div>;
  }
}
