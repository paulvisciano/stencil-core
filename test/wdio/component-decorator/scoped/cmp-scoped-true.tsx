import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-true',
  scoped: true,
})
export class CmpScopedTrue {
  render() {
    return <div>scoped: true</div>;
  }
}
