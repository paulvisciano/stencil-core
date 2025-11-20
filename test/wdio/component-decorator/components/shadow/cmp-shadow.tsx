import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow',
  shadow: true
})
export class CmpShadow {
  render() {
    return <div>Permutation: ✓ | - | - | - | - | - | -</div>;
  }
}
