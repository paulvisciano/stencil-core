import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-assets-form',
  shadow: true,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: true,
})
export class ComponentShadowScopedAssetsForm {
  render() {
    return <div>Permutation: shadow, scoped, assetsDirs, formAssociated</div>;
  }
}
