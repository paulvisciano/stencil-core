import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-assetsdirs-formassociated-false',
  shadow: true,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: false,
})
export class CmpShadowScopedAssetsDirsFormAssociatedFalse {
  render() {
    return <div>shadow + scoped + assetsDirs + formAssociated: false</div>;
  }
}
