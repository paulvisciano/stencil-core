import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-styles',
  shadow: true,
  styles: '.test { color: blue; }',
})
export class ComponentShadowStyles {
  render() {
    return <div>Permutation: shadow, styles</div>;
  }
}
