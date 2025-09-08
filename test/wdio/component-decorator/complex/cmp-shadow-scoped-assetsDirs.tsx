import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped-assetsdirs',
  shadow: true,
  scoped: true,
  assetsDirs: ['assets'],
})
export class CmpShadowScopedAssetsDirs {
  render() {
    return <div>shadow + scoped + assetsDirs</div>;
  }
}
