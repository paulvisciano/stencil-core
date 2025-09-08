import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-formassociated-styleurl',
  scoped: true,
  formAssociated: true,
  styleUrl: 'test-style.css',
})
export class ComponentScopedFormAssociatedStyleUrl {
  render() {
    return <div>Permutation: scoped, formAssociated, styleUrl</div>;
  }
}
