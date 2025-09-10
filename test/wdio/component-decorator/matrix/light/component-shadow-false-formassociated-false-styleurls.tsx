// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-formassociated-false-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-formassociated-false-styleurls',
  shadow: false,
  formAssociated: false,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class ComponentShadowFalseFormassociatedFalseStyleurls {
  render() {
    return <div>Permutation: ✗ | - | - | ✗ | - | ✓ | -</div>;
  }
}
