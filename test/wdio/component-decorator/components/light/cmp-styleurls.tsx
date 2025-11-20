import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-styleurls',
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpStyleurls {
  render() {
    return <div>Permutation: - | - | - | - | - | ✓ | -</div>;
  }
}
