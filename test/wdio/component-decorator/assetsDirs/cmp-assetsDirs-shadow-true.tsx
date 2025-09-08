import { Component } from '@stencil/core';

@Component({
  tag: 'cmp-assetsdirs-shadow-true',
  shadow: true,
  assetsDirs: ['assets'],
})
export class CmpAssetsDirsShadowTrue {
  render() {
    return <div>assetsDirs + shadow</div>;
  }
}
