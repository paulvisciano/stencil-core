// filepath: /Users/paul.visciano/repos/core/test/wdio/prop/components/Array/prop-array-reflect-mutable-false.tsx
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-array-reflect-mutable-false',
  shadow: true,
})
export class PropArrayReflectMutableFalse {
  @Prop({ reflect: true, mutable: false }) val!: any[];

  render() {
    const v = this.val ?? [];
    return (
      <div>
        <p>Type: Array | reflect: true | mutable: false</p>
        <p>Value: {JSON.stringify(v)}</p>
      </div>
    );
  }
}
