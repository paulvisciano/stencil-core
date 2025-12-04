import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-false-styleurls',
  shadow: true,
  scoped: false,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpShadowScopedFalseStyleurls {
  render() {
    return <div>Permutation: ✓ | ✗ | - | - | - | ✓ | -</div>;
  }
}
