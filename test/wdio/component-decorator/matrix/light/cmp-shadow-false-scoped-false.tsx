// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-shadow-false-scoped-false.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-false',
  shadow: false,
  scoped: false
})
export class CmpShadowFalseScopedFalse {
  render() {
    return <div>Permutation: ✗ | ✗ | - | - | - | - | -</div>;
  }
}
