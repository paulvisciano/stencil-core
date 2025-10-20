// filepath: /Users/paul.visciano/repos/core/test/wdio/prop/components/number/prop-number-reflect-mutable-false.tsx
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-number-reflect-mutable-false',
  shadow: true,
})
export class PropNumberReflectMutableFalse {
  @Prop({ reflect: true, mutable: false }) val!: number;

  render() {
    const v = this.val ?? 0;
    return (
      <div>
        <p>Type: number | reflect: true | mutable: false</p>
        <p>Value: {v}</p>
      </div>
    );
  }
}
