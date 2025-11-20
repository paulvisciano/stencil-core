import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-styles',
  scoped: false,
  styles: ':host{display:block}'
})
export class CmpScopedFalseStyles {
  render() {
    return <div>Permutation: - | ✗ | - | - | - | - | ✓</div>;
  }
}
