import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false-shadow-false',
  scoped: false,
  shadow: false,
})
export class CmpScopedFalseShadowFalse {
  render() {
    return <div>scoped: false + shadow: false</div>;
  }
}
