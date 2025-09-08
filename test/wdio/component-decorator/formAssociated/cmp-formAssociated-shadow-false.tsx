import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-formassociated-shadow-false',
  shadow: false,
  formAssociated: true,
})
export class CmpFormAssociatedShadowFalse {
  render() {
    return <div>formAssociated + shadow: false</div>;
  }
}
