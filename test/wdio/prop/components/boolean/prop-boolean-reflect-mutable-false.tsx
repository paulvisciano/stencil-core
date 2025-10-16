// filepath: /Users/paul.visciano/repos/core/test/wdio/prop/matrix/boolean/prop-boolean-reflect-mutable-false.tsx
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-boolean-reflect-mutable-false',
  shadow: true,
})
export class PropBooleanReflectMutableFalse {
  @Prop({ reflect: true, mutable: false }) val!: boolean;

  render() {
    const v = this.val ?? false;
    return (
      <div>
        <p>Type: boolean | reflect: true | mutable: false</p>
        <p>Value: {v ? 'true' : 'false'}</p>
      </div>
    );
  }
}
