import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-formassociated-false-styles',
  formAssociated: false,
  styles: ':host{display:block}'
})
export class CmpFormassociatedFalseStyles {
  render() {
    return <div>Permutation: - | - | - | ✗ | - | - | ✓</div>;
  }
}
