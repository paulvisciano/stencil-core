import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false',
  shadow: true,
  scoped: false
})
export class CmpShadowScopedFalse {
  render() {
    return <div>Permutation: ✓ | ✗ | - | - | - | - | -</div>;
  }
}
