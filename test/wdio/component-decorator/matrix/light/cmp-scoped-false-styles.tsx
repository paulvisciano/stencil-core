// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-scoped-false-styles.tsx
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
