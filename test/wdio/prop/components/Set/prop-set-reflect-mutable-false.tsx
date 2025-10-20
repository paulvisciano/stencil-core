// filepath: /Users/paul.visciano/repos/core/test/wdio/prop/components/Set/prop-set-reflect-mutable-false.tsx
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-set-reflect-mutable-false',
  shadow: true,
})
export class PropSetReflectMutableFalse {
  @Prop({ reflect: true, mutable: false }) val!: Set<string>;

  render() {
    const v = this.val ?? new Set();
    return (
      <div>
        <p>Type: Set | reflect: true | mutable: false</p>
        <p>Value: {Array.from(v).join(',')}</p>
      </div>
    );
  }
}
