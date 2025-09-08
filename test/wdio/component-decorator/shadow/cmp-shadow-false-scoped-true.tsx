import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false-scoped-true',
  shadow: false,
  scoped: true,
})
export class CmpShadowFalseScopedTrue {
  render() {
    return <div>shadow: false + scoped: true</div>;
  }
}
