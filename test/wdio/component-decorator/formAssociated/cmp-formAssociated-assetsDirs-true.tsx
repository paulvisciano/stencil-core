import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-formassociated-assetsdirs-true',
  formAssociated: true,
  assetsDirs: ['assets'],
})
export class CmpFormAssociatedAssetsDirsTrue {
  render() {
    return <div>formAssociated + assetsDirs</div>;
  }
}
