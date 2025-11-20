import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-styleurls',
  shadow: false,
  scoped: true,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpShadowFalseScopedStyleurls {
  render() {
    return <div>Permutation: ✗ | ✓ | - | - | - | ✓ | -</div>;
  }
}
