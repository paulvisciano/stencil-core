// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/cmp-shadow-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-styleurl',
  shadow: true,
  styleUrl: 'matrix-gen.css'
})
export class CmpShadowStyleurl {
  render() {
    return <div>Permutation: ✓ | - | - | - | ✓ | - | -</div>;
  }
}
