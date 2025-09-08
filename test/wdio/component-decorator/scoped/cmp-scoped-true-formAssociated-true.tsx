import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-true-formassociated-true',
  scoped: true,
  formAssociated: true,
})
export class CmpScopedTrueFormAssociatedTrue {
  render() {
    return <div>scoped: true + formAssociated: true</div>;
  }
}
