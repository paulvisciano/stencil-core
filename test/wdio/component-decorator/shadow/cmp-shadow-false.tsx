import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-false',
  shadow: false,
})
export class CmpShadowFalse {
  render() {
    return <div>shadow: false</div>;
  }
}
