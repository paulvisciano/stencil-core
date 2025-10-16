// filepath: /Users/paul.visciano/repos/core/test/wdio/prop/matrix/Object/prop-object-reflect-mutable-false.tsx
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-object-reflect-mutable-false',
  shadow: true,
})
export class PropObjectReflectMutableFalse {
  @Prop({ reflect: true, mutable: false }) val!: Record<string, any>;

  render() {
    const v = this.val ?? {};
    return (
      <div>
        <p>Type: Object | reflect: true | mutable: false</p>
        <p>Value: {JSON.stringify(v)}</p>
      </div>
    );
  }
}
