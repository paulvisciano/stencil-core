// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-false-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-false-styleurls',
  scoped: false,
  styleUrls: ['matrix-gen.css', 'matrix-alt.css']
})
export class ComponentScopedFalseStyleurls {
  render() {
    return <div>Permutation: - | ✗ | - | - | - | ✓ | -</div>;
  }
}
