import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-assetsdirs-true',
  shadow: false,
  assetsDirs: ['assets'],
})
export class CmpShadowFalseAssetsDirsTrue {
  render() {
    return <div>shadow: false + assetsDirs: true</div>;
  }
}
