import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-true-assetsdirs-true',
  shadow: true,
  assetsDirs: ['assets'],
})
export class CmpShadowTrueAssetsDirsTrue {
  render() {
    return <div>shadow: true + assetsDirs: true</div>;
  }
}
