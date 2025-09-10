// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/cmp-shadow-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-styles',
  shadow: true,
  styles: ':host{display:block}'
})
export class CmpShadowStyles {
  render() {
    return <div>Permutation: ✓ | - | - | - | - | - | ✓</div>;
  }
}
