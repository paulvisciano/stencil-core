import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-assetsdirs-false-formassociated-false',
  scoped: true,
  assetsDirs: [],
  formAssociated: false,
})
export class CmpScopedAssetsDirsFalseFormAssociatedFalse {
  render() {
    return <div>scoped + assetsDirs: false + formAssociated: false</div>;
  }
}
