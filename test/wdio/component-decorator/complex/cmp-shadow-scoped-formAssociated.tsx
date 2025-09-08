import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-formassociated',
  shadow: true,
  scoped: true,
  formAssociated: true,
})
export class CmpShadowScopedFormAssociated {
  render() {
    return <div>shadow + scoped + formAssociated</div>;
  }
}
