import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-false',
  shadow: false,
  scoped: false
})
export class CmpShadowFalseScopedFalse {
  render() {
    return <div>Permutation: ✗ | ✗ | - | - | - | - | -</div>;
  }
}
