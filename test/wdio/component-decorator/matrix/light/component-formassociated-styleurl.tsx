// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-formassociated-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-formassociated-styleurl',
  formAssociated: true,
  styleUrl: '../matrix-gen.css'
})
export class ComponentFormassociatedStyleurl {
  render() {
    return <div>Permutation: - | - | - | ✓ | ✓ | - | -</div>;
  }
}
