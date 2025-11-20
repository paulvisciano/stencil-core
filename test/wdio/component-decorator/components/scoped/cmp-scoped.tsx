import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped',
  scoped: true
})
export class CmpScoped {
  render() {
    return <div>Permutation: - | ✓ | - | - | - | - | -</div>;
  }
}
