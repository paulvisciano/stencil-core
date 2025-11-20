import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-styleurls',
  shadow: true,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpShadowStyleurls {
  render() {
    return <div>Permutation: ✓ | - | - | - | - | ✓ | -</div>;
  }
}
