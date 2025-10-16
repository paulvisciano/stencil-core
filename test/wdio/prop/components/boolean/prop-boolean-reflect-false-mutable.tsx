// filepath: /Users/paul.visciano/repos/core/test/wdio/prop/matrix/boolean/prop-boolean-reflect-false-mutable.tsx
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-boolean-reflect-false-mutable',
  shadow: true,
})
export class PropBooleanReflectFalseMutable {
  @Prop({ reflect: false, mutable: true }) val!: boolean;

  render() {
    const v = this.val ?? false;
    return (
      <div>
        <p>Type: boolean | reflect: false | mutable: true</p>
        <p>Value: {v ? 'true' : 'false'}</p>
      </div>
    );
  }
}
