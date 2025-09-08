// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-formassociated-false-styles.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-formassociated-false-styles',
  formAssociated: false,
  styles: ':host{display:block}'
})
export class ComponentFormassociatedFalseStyles {
  render() {
    return <div>Permutation: - | - | - | ✗ | - | - | ✓</div>;
  }
}
