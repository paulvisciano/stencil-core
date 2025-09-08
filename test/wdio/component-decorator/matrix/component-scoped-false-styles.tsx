// filepath: /Users/paul.visciano/repos/core/test/wdio/component-decorator/matrix/component-scoped-false-styles.tsx
import { Component } from '@stencil/core';

@Component({
  tag: 'component-scoped-false-styles',
  scoped: false,
  styles: ':host{display:block}'
})
export class ComponentScopedFalseStyles {
  render() {
    return <div>Permutation: - | ✗ | - | - | - | - | ✓</div>;
  }
}
