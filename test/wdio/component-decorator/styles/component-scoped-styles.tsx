import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-scoped-styles',
  scoped: true,
  styles: '.test { color: orange; }',
})
export class ComponentScopedStyles {
  render() {
    return <div>Permutation: scoped, styles</div>;
  }
}
