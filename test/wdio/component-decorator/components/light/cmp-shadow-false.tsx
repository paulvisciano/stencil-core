import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false',
  shadow: false
})
export class CmpShadowFalse {
  render() {
    return <div>Permutation: ✗ | - | - | - | - | - | -</div>;
  }
}
