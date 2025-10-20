// filepath: /Users/paul.visciano/repos/core/test/wdio/prop/components/Array/prop-array-reflect-false-mutable.tsx
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-array-reflect-false-mutable',
  shadow: true,
})
export class PropArrayReflectFalseMutable {
  @Prop({ reflect: false, mutable: true }) val!: any[];

  render() {
    const v = this.val ?? [];
    return (
      <div>
        <p>Type: Array | reflect: false | mutable: true</p>
        <p>Value: {JSON.stringify(v)}</p>
      </div>
    );
  }
}
