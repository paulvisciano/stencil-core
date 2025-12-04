import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-formassociated',
  shadow: true,
  formAssociated: true
})
export class CmpShadowFormassociated {
  render() {
    return <div>Permutation: ✓ | - | - | ✓ | - | - | -</div>;
  }
}
