// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-scoped-false-formassociated-false-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-false-formassociated-false-styleurls',
  shadow: false,
  scoped: false,
  formAssociated: false,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class ComponentShadowFalseScopedFalseFormassociatedFalseStyleurls {
  render() {
    return <div>Permutation: ✗ | ✗ | - | ✗ | - | ✓ | -</div>;
  }
}
