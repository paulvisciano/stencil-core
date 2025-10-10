// filepath: /Users/paul.visciano/repos/core/test/wdio/prop/matrix/Object/prop-object-reflect-mutable.tsx
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-object-reflect-mutable',
  shadow: true,
})
export class PropObjectReflectMutable {
  @Prop({ reflect: true, mutable: true }) val!: Record<string, any>;

  render() {
    const v = this.val ?? {};
    return (
      <div>
        <p>Type: Object | reflect: true | mutable: true</p>
        <p>Value: {JSON.stringify(v)}</p>
      </div>
    );
  }
}
