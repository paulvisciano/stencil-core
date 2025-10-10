// filepath: /Users/paul.visciano/repos/core/test/wdio/prop/matrix/number/prop-number-reflect-false-mutable.tsx
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-number-reflect-false-mutable',
  shadow: true,
})
export class PropNumberReflectFalseMutable {
  @Prop({ reflect: false, mutable: true }) val!: number;

  render() {
    const v = this.val ?? 0;
    return (
      <div>
        <p>Type: number | reflect: false | mutable: true</p>
        <p>Value: {v}</p>
      </div>
    );
  }
}
