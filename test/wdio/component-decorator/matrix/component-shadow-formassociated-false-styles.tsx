import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-formassociated-false-styles',
  shadow: true,
  formAssociated: false,
  styles: '.matrix { color: #0a7; }'
})
export class ComponentShadowFormAssociatedFalseStyles {
  render() {
    return <div>Permutation: ✓ | - | - | ✗ | - | - | ✓</div>;
  }
}
