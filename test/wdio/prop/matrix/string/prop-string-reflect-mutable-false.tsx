// filepath: /Users/paul.visciano/repos/core/test/wdio/prop/matrix/string/prop-string-reflect-mutable-false.tsx
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-string-reflect-mutable-false',
  shadow: true,
})
export class PropStringReflectMutableFalse {
  @Prop({ reflect: true, mutable: false }) val!: string;

  render() {
    const v = this.val ?? 'init';
    return (
      <div>
        <p>Type: string | reflect: true | mutable: false</p>
        <p>Value: {v}</p>
      </div>
    );
  }
}
