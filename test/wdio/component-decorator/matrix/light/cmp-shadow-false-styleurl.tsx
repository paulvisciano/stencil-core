// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/light/cmp-shadow-false-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-styleurl',
  shadow: false,
  styleUrl: '../matrix-gen.css'
})
export class CmpShadowFalseStyleurl {
  render() {
    return <div>Permutation: ✗ | - | - | - | ✓ | - | -</div>;
  }
}
