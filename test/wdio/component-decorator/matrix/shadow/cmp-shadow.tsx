// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/shadow/cmp-shadow.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow',
  shadow: true
})
export class CmpShadow {
  render() {
    return <div>Permutation: ✓ | - | - | - | - | - | -</div>;
  }
}
