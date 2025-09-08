import { Component } from '@stencil/core';

@Component({
  tag: 'cmp-assetsdirs-scoped-false',
  scoped: false,
  assetsDirs: ['assets'],
})
export class CmpAssetsDirsScopedFalse {
  render() {
    return <div>assetsDirs + scoped: false</div>;
  }
}
