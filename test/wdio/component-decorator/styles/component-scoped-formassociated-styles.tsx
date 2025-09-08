import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-formassociated-styles',
  scoped: true,
  formAssociated: true,
  styles: '.test { color: teal; }',
})
export class ComponentScopedFormAssociatedStyles {
  render() {
    return <div>Permutation: scoped, formAssociated, styles</div>;
  }
}
