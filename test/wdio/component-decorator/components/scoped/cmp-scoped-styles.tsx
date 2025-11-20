import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-styles',
  scoped: true,
  styles: ':host{display:block}'
})
export class CmpScopedStyles {
  render() {
    return <div>Permutation: - | ✓ | - | - | - | - | ✓</div>;
  }
}
