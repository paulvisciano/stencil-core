// filepath: /Users/paul.visciano/repos/core/test/wdio/prop/matrix/Set/prop-set-reflect-false-mutable-false.tsx
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-set-reflect-false-mutable-false',
  shadow: true,
})
export class PropSetReflectFalseMutableFalse {
  @Prop({ reflect: false, mutable: false }) val!: Set<string>;

  render() {
    const v = this.val ?? new Set();
    return (
      <div>
        <p>Type: Set | reflect: false | mutable: false</p>
        <p>Value: {Array.from(v).join(',')}</p>
      </div>
    );
  }
}
