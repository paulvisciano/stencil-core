// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-scoped-false-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-false-styleurl',
  shadow: false,
  scoped: false,
  styleUrl: 'matrix-gen.css'
})
export class ComponentShadowFalseScopedFalseStyleurl {
  render() {
    return <div>Permutation: ✗ | ✗ | - | - | ✓ | - | -</div>;
  }
}
