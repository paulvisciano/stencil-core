import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-assetsdirs-false-formassociated',
  shadow: true,
  scoped: true,
  assetsDirs: [],
  formAssociated: true,
})
export class CmpShadowScopedAssetsDirsFalseFormAssociated {
  render() {
    return <div>shadow + scoped + assetsDirs: false + formAssociated</div>;
  }
}
