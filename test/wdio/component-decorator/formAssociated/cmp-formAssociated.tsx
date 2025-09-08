import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-formassociated',
  formAssociated: true,
})
export class CmpFormAssociated {
  render() {
    return <div>formAssociated only</div>;
  }
}
