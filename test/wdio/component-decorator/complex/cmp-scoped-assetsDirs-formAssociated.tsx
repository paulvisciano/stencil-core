import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-assetsdirs-formassociated',
  scoped: true,
  assetsDirs: ['assets'],
  formAssociated: true,
})
export class CmpScopedAssetsDirsFormAssociated {
  render() {
    return <div>scoped + assetsDirs + formAssociated</div>;
  }
}
