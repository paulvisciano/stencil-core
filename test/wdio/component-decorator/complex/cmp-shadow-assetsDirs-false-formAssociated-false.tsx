import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-assetsdirs-false-formassociated-false',
  shadow: true,
  assetsDirs: [],
  formAssociated: false,
})
export class CmpShadowAssetsDirsFalseFormAssociatedFalse {
  render() {
    return <div>shadow + assetsDirs: false + formAssociated: false</div>;
  }
}
