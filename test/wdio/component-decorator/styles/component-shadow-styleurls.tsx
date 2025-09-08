import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-styleurls',
  shadow: true,
  styleUrls: ['test-style1.css', 'test-style2.css'],
})
export class ComponentShadowStyleUrls {
  render() {
    return <div>Permutation: shadow, styleUrls</div>;
  }
}
