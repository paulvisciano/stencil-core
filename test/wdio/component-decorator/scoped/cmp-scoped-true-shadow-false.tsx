import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-true-shadow-false',
  scoped: true,
  shadow: false,
})
export class CmpScopedTrueShadowFalse {
  render() {
    return <div>scoped: true + shadow: false</div>;
  }
}
