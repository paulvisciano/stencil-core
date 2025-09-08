import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-assetsdirs-formassociated',
  shadow: true,
  assetsDirs: ['assets'],
  formAssociated: true,
})
export class CmpShadowAssetsDirsFormAssociated {
  render() {
    return <div>shadow + assetsDirs + formAssociated</div>;
  }
}
