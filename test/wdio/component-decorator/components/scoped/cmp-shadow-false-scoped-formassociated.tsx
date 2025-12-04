import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-formassociated',
  shadow: false,
  scoped: true,
  formAssociated: true
})
export class CmpShadowFalseScopedFormassociated {
  render() {
    return <div>Permutation: ✗ | ✓ | - | ✓ | - | - | -</div>;
  }
}
