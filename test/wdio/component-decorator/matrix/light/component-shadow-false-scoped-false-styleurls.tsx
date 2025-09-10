// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-scoped-false-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-false-styleurls',
  shadow: false,
  scoped: false,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class ComponentShadowFalseScopedFalseStyleurls {
  render() {
    return <div>Permutation: ✗ | ✗ | - | - | - | ✓ | -</div>;
  }
}
