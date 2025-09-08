import { Component } from '@stencil/core';

@Component({
  tag: 'cmp-assetsdirs-formassociated-true',
  assetsDirs: ['assets'],
  formAssociated: true,
})
export class CmpAssetsDirsFormAssociatedTrue {
  render() {
    return <div>assetsDirs + formAssociated</div>;
  }
}
