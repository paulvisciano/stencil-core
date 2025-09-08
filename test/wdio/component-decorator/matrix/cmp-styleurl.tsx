// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/cmp-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-styleurl',
  styleUrl: 'matrix-gen.css'
})
export class CmpStyleurl {
  render() {
    return <div>Permutation: - | - | - | - | ✓ | - | -</div>;
  }
}
