import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-styleurl',
  shadow: true,
  styleUrl: 'test-style.css',
})
export class ComponentShadowStyleUrl {
  render() {
    return <div>Permutation: shadow, styleUrl</div>;
  }
}
