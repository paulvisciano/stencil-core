// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/shadow/cmp-shadow-scoped-false-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-styles',
  shadow: true,
  scoped: false,
  styles: ':host{display:block}'
})
export class CmpShadowScopedFalseStyles {
  render() {
    return <div>Permutation: ✓ | ✗ | - | - | - | - | ✓</div>;
  }
}
