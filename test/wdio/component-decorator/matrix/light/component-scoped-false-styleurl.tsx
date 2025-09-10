// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-false-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-false-styleurl',
  scoped: false,
  styleUrl: '../matrix-gen.css'
})
export class ComponentScopedFalseStyleurl {
  render() {
    return <div>Permutation: - | ✗ | - | - | ✓ | - | -</div>;
  }
}
