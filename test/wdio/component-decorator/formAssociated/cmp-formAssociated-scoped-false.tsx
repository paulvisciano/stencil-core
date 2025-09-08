import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-formassociated-scoped-false',
  scoped: false,
  formAssociated: true,
})
export class CmpFormAssociatedScopedFalse {
  render() {
    return <div>formAssociated + scoped: false</div>;
  }
}
