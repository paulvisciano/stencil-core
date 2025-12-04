import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-false-styleurls',
  shadow: false,
  scoped: false,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpShadowFalseScopedFalseStyleurls {
  render() {
    return <div>Permutation: ✗ | ✗ | - | - | - | ✓ | -</div>;
  }
}
