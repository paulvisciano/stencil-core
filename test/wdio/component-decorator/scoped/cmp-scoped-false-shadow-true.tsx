import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-shadow-true',
  scoped: false,
  shadow: true,
})
export class CmpScopedFalseShadowTrue {
  render() {
    return <div>scoped: false + shadow: true</div>;
  }
}
