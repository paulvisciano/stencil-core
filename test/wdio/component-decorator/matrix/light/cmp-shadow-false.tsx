// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-shadow-false.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false',
  shadow: false
})
export class CmpShadowFalse {
  render() {
    return <div>Permutation: ✗ | - | - | - | - | - | -</div>;
  }
}
