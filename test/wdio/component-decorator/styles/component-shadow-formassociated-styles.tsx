import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-formassociated-styles',
  shadow: true,
  formAssociated: true,
  styles: '.test { color: maroon; }',
})
export class ComponentShadowFormAssociatedStyles {
  render() {
    return <div>Permutation: shadow, formAssociated, styles</div>;
  }
}
