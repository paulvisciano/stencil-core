import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped',
  shadow: false,
  scoped: true
})
export class CmpShadowFalseScoped {
  render() {
    return <div>Permutation: ✗ | ✓ | - | - | - | - | -</div>;
  }
}
