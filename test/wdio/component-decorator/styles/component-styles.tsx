import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-styles',
  styles: '.test { color: green; }',
})
export class ComponentStyles {
  render() {
    return <div>Permutation: styles only</div>;
  }
}
