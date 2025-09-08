import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-scoped',
  shadow: true,
  scoped: true,
})
export class CmpShadowScoped {
  render() {
    return <div>shadow + scoped</div>;
  }
}
