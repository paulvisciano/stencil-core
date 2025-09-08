import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-formassociated-true',
  shadow: false,
  formAssociated: true,
})
export class CmpShadowFalseFormAssociatedTrue {
  render() {
    return <div>shadow: false + formAssociated: true</div>;
  }
}
