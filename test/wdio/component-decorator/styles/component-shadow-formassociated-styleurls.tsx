import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-formassociated-styleurls',
  shadow: true,
  formAssociated: true,
  styleUrls: ['test-style1.css', 'test-style2.css'],
})
export class ComponentShadowFormAssociatedStyleUrls {
  render() {
    return <div>Permutation: shadow, formAssociated, styleUrls</div>;
  }
}
