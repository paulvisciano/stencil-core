import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-formassociated-shadow-true',
  shadow: true,
  formAssociated: true,
})
export class CmpFormAssociatedShadowTrue {
  render() {
    return <div>formAssociated + shadow</div>;
  }
}
