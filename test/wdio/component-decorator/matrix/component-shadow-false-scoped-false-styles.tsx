// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-scoped-false-styles.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-scoped-false-styles',
  shadow: false,
  scoped: false,
  styles: ':host{display:block}'
})
export class ComponentShadowFalseScopedFalseStyles {
  render() {
    return <div>Permutation: ✗ | ✗ | - | - | - | - | ✓</div>;
  }
}
