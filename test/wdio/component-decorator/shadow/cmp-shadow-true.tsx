import { h, Component } from '@stencil/core';

@Component({
  tag: 'cmp-shadow-true',
  shadow: true,
})
export class CmpShadowTrue {
  render() {
    return <div>shadow: true</div>;
  }
}
