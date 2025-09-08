import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-scoped-styleurl',
  shadow: true,
  scoped: true,
  styleUrl: 'test-style.css'
})
export class ComponentShadowScopedStyleUrl {
  render() {
    return <div>Permutation: ✓ | ✓ | - | - | ✓ | - | -</div>;
  }
}
