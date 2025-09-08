// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/cmp-scoped-styles.tsx
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
