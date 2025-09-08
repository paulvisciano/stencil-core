// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-styleurls.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-styleurls',
  shadow: false,
  styleUrls: ['matrix-gen.css']
})
export class ComponentShadowFalseStyleurls {
  render() {
    return <div>Permutation: ✗ | - | - | - | - | ✓ | -</div>;
  }
}
