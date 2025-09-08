// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-scoped-false-styleurls.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-false-styleurls',
  shadow: false,
  scoped: false,
  styleUrls: ['matrix-gen.css']
})
export class ComponentShadowFalseScopedFalseStyleurls {
  render() {
    return <div>Permutation: ✗ | ✗ | - | - | - | ✓ | -</div>;
  }
}
