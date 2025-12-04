import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-formassociated-styleurl',
  formAssociated: true,
  styleUrl: '../matrix-gen.css'
})
export class CmpFormassociatedStyleurl {
  render() {
    return <div>Permutation: - | - | - | ✓ | ✓ | - | -</div>;
  }
}
