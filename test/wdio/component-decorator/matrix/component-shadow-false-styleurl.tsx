// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-styleurl.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-styleurl',
  shadow: false,
  styleUrl: 'matrix-gen.css'
})
export class ComponentShadowFalseStyleurl {
  render() {
    return <div>Permutation: ✗ | - | - | - | ✓ | - | -</div>;
  }
}
