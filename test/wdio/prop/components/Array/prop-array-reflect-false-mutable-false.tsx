// filepath: /Users/paul.visciano/repos/core/test/wdio/prop/components/Array/prop-array-reflect-false-mutable-false.tsx
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-array-reflect-false-mutable-false',
  shadow: true,
})
export class PropArrayReflectFalseMutableFalse {
  @Prop({ reflect: false, mutable: false }) val!: any[];

  render() {
    const v = this.val ?? [];
    return (
      <div>
        <p>Type: Array | reflect: false | mutable: false</p>
        <p>Value: {JSON.stringify(v)}</p>
      </div>
    );
  }
}
