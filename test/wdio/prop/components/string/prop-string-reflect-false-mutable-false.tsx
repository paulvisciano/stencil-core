// filepath: /Users/paul.visciano/repos/core/test/wdio/prop/matrix/string/prop-string-reflect-false-mutable-false.tsx
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-string-reflect-false-mutable-false',
  shadow: true,
})
export class PropStringReflectFalseMutableFalse {
  @Prop({ reflect: false, mutable: false }) val!: string;

  render() {
    const v = this.val ?? 'init';
    return (
      <div>
        <p>Type: string | reflect: false | mutable: false</p>
        <p>Value: {v}</p>
      </div>
    );
  }
}
