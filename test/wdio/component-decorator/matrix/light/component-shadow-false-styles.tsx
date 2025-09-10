// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-shadow-false-styles.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-shadow-false-styles',
  shadow: false,
  styles: ':host{display:block}'
})
export class ComponentShadowFalseStyles {
  render() {
    return <div>Permutation: ✗ | - | - | - | - | - | ✓</div>;
  }
}
