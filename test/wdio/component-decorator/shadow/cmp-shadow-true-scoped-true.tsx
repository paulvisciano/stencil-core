import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-true-scoped-true',
  shadow: true,
  scoped: true,
})
export class CmpShadowTrueScopedTrue {
  render() {
    return <div>shadow: true + scoped: true</div>;
  }
}
