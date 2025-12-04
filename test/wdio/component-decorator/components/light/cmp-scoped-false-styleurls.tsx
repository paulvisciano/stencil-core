import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-styleurls',
  scoped: false,
  styleUrls: ['../matrix-gen.css', '../matrix-alt.css']
})
export class CmpScopedFalseStyleurls {
  render() {
    return <div>Permutation: - | ✗ | - | - | - | ✓ | -</div>;
  }
}
