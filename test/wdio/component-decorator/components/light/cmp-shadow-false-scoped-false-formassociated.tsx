import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-false-formassociated',
  shadow: false,
  scoped: false,
  formAssociated: true
})
export class CmpShadowFalseScopedFalseFormassociated {
  render() {
    return <div>Permutation: ✗ | ✗ | - | ✓ | - | - | -</div>;
  }
}
