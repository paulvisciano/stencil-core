import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false',
  scoped: false
})
export class CmpScopedFalse {
  render() {
    return <div>Permutation: - | ✗ | - | - | - | - | -</div>;
  }
}
