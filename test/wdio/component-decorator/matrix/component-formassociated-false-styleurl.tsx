// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-formassociated-false-styleurl.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-formassociated-false-styleurl',
  formAssociated: false,
  styleUrl: 'matrix-gen.css'
})
export class ComponentFormassociatedFalseStyleurl {
  render() {
    return <div>Permutation: - | - | - | ✗ | ✓ | - | -</div>;
  }
}
