import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-true-formassociated-true',
  shadow: true,
  formAssociated: true,
})
export class CmpShadowTrueFormAssociatedTrue {
  render() {
    return <div>shadow: true + formAssociated: true</div>;
  }
}
