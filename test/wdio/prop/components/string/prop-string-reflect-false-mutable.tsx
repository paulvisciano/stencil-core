// filepath: /Users/paul.visciano/repos/core/test/wdio/prop/components/string/prop-string-reflect-false-mutable.tsx
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-string-reflect-false-mutable',
  shadow: true,
})
export class PropStringReflectFalseMutable {
  @Prop({ reflect: false, mutable: true }) val!: string;

  render() {
    const v = this.val ?? 'init';
    return (
      <div>
        <p>Type: string | reflect: false | mutable: true</p>
        <p>Value: {v}</p>
      </div>
    );
  }
}
