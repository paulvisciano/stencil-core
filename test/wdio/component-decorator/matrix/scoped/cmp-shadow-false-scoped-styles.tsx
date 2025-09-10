// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/scoped/cmp-shadow-false-scoped-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-styles',
  shadow: false,
  scoped: true,
  styles: ':host{display:block}'
})
export class CmpShadowFalseScopedStyles {
  render() {
    return <div>Permutation: ✗ | ✓ | - | - | - | - | ✓</div>;
  }
}
