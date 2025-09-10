// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-scoped-false-formassociated-styleurls.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-false-formassociated-styleurls',
  shadow: false,
  scoped: false,
  formAssociated: true,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class ComponentShadowFalseScopedFalseFormassociatedStyleurls {
  render() {
    return <div>Permutation: ✗ | ✗ | - | ✓ | - | ✓ | -</div>;
  }
}
