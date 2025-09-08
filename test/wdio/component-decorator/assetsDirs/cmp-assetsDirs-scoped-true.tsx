import { Component } from '@stencil/core';

@Component({
  tag: 'cmp-assetsdirs-scoped-true',
  scoped: true,
  assetsDirs: ['assets'],
})
export class CmpAssetsDirsScopedTrue {
  render() {
    return <div>assetsDirs + scoped</div>;
  }
}
