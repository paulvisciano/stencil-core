// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-formassociated-false.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-formassociated-false',
  formAssociated: false
})
export class ComponentFormassociatedFalse {
  render() {
    return <div>Permutation: - | - | - | ✗ | - | - | -</div>;
  }
}
