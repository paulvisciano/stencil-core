// filepath: /Users/paul.visciano/repos/core/test/wdio/prop/matrix/Array/prop-array-reflect-mutable.tsx
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-array-reflect-mutable',
  shadow: true,
})
export class PropArrayReflectMutable {
  @Prop({ reflect: true, mutable: true }) val!: any[];

  render() {
    const v = this.val ?? [];
    return (
      <div>
        <p>Type: Array | reflect: true | mutable: true</p>
        <p>Value: {JSON.stringify(v)}</p>
      </div>
    );
  }
}
