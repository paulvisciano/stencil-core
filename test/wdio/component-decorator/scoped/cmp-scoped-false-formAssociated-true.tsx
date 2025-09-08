import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-formassociated-true',
  scoped: false,
  formAssociated: true,
})
export class CmpScopedFalseFormAssociatedTrue {
  render() {
    return <div>scoped: false + formAssociated: true</div>;
  }
}
