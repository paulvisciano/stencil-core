import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-styleurls',
  styleUrls: ['test-style1.css', 'test-style2.css'],
})
export class ComponentStyleUrls {
  render() {
    return <div>Permutation: styleUrls only</div>;
  }
}
