import { Component } from '@stencil/core';

@Component({
  tag: 'cmp-assetsdirs-shadow-false',
  shadow: false,
  assetsDirs: ['assets'],
})
export class CmpAssetsDirsShadowFalse {
  render() {
    return <div>assetsDirs + shadow: false</div>;
  }
}
