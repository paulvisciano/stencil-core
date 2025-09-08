import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-scoped-false',
  scoped: false,
})
export class CmpScopedFalse {
  render() {
    return <div>scoped: false</div>;
  }
}
