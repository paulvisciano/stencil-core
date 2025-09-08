import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-assetsdirs-true',
  scoped: false,
  assetsDirs: ['assets'],
})
export class CmpScopedFalseAssetsDirsTrue {
  render() {
    return <div>scoped: false + assetsDirs: true</div>;
  }
}
