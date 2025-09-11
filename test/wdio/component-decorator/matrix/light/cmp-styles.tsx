// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-styles.tsx
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
