// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-formassociated-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-formassociated-styleurls',
  shadow: false,
  formAssociated: true,
  styleUrls: ['matrix-gen.css', 'matrix-alt.css']
})
export class ComponentShadowFalseFormassociatedStyleurls {
  render() {
    return <div>Permutation: ✗ | - | - | ✓ | - | ✓ | -</div>;
  }
}
