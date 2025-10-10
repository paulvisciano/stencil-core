// filepath: /Users/paul.visciano/repos/core/test/wdio/prop/matrix/Object/prop-object-reflect-false-mutable.tsx
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-object-reflect-false-mutable',
  shadow: true,
})
export class PropObjectReflectFalseMutable {
  @Prop({ reflect: false, mutable: true }) val!: Record<string, any>;

  render() {
    const v = this.val ?? {};
    return (
      <div>
        <p>Type: Object | reflect: false | mutable: true</p>
        <p>Value: {JSON.stringify(v)}</p>
      </div>
    );
  }
}
