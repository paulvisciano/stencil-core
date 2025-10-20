// filepath: /Users/paul.visciano/repos/core/test/wdio/prop/components/number/prop-number-reflect-false-mutable-false.tsx
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-number-reflect-false-mutable-false',
  shadow: true,
})
export class PropNumberReflectFalseMutableFalse {
  @Prop({ reflect: false, mutable: false }) val!: number;

  render() {
    const v = this.val ?? 0;
    return (
      <div>
        <p>Type: number | reflect: false | mutable: false</p>
        <p>Value: {v}</p>
      </div>
    );
  }
}
