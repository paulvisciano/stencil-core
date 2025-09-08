import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-formassociated-styleurl',
  shadow: true,
  formAssociated: true,
  styleUrl: 'test-style.css',
})
export class ComponentShadowFormAssociatedStyleUrl {
  render() {
    return <div>Permutation: shadow, formAssociated, styleUrl</div>;
  }
}
