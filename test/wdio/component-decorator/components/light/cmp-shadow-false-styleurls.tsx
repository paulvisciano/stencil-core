import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-styleurls',
  shadow: false,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpShadowFalseStyleurls {
  render() {
    return <div>Permutation: ✗ | - | - | - | - | ✓ | -</div>;
  }
}
