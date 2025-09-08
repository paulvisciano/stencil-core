import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-formassociated-scoped-true',
  scoped: true,
  formAssociated: true,
})
export class CmpFormAssociatedScopedTrue {
  render() {
    return <div>formAssociated + scoped</div>;
  }
}
