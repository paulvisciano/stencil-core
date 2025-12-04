import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-formassociated',
  formAssociated: true
})
export class CmpFormassociated {
  render() {
    return <div>Permutation: - | - | - | ✓ | - | - | -</div>;
  }
}
