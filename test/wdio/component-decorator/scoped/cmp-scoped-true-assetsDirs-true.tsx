import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-true-assetsdirs-true',
  scoped: true,
  assetsDirs: ['assets'],
})
export class CmpScopedTrueAssetsDirsTrue {
  render() {
    return <div>scoped: true + assetsDirs: true</div>;
  }
}
