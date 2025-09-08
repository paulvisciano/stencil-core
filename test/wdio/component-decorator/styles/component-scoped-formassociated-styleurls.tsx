import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-formassociated-styleurls',
  scoped: true,
  formAssociated: true,
  styleUrls: ['test-style1.css', 'test-style2.css'],
})
export class ComponentScopedFormAssociatedStyleUrls {
  render() {
    return <div>Permutation: scoped, formAssociated, styleUrls</div>;
  }
}
