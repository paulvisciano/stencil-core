// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-formassociated-styles.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-formassociated-styles',
  formAssociated: true,
  styles: ':host{display:block}'
})
export class ComponentFormassociatedStyles {
  render() {
    return <div>Permutation: - | - | - | ✓ | - | - | ✓</div>;
  }
}
