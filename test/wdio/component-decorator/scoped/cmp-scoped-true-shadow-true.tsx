import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-true-shadow-true',
  scoped: true,
  shadow: true,
})
export class CmpScopedTrueShadowTrue {
  render() {
    return <div>scoped: true + shadow: true</div>;
  }
}
