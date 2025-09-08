import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-assetsdirs-formassociated',
  shadow: true,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: true,
})
export class CmpShadowScopedAssetsDirsFormAssociated {
  render() {
    return <div>shadow + scoped + assetsDirs + formAssociated</div>;
  }
}
