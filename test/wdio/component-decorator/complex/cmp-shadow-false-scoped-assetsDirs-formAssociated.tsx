import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-assetsdirs-formassociated',
  shadow: false,
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: true,
})
export class CmpShadowFalseScopedAssetsDirsFormAssociated {
  render() {
    return <div>shadow: false + scoped + assetsDirs + formAssociated</div>;
  }
}
