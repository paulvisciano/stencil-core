import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-styles',
  styles: ':host{display:block}'
})
export class CmpStyles {
  render() {
    return <div>Permutation: - | - | - | - | - | - | ✓</div>;
  }
}
