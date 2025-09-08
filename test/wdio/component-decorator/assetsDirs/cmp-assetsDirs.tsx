import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-assetsdirs',
  assetsDirs: ['assets'],
})
export class CmpAssetsDirs {
  render() {
    return <div>assetsDirs only</div>;
  }
}
