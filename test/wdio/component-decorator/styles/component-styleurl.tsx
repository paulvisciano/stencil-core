import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-styleurl',
  styleUrl: 'test-style.css',
})
export class ComponentStyleUrl {
  render() {
    return <div>Permutation: styleUrl only</div>;
  }
}
