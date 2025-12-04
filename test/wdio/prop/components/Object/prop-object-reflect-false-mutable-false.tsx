import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-object-reflect-false-mutable-false',
  shadow: true,
})
export class PropObjectReflectFalseMutableFalse {
  @Prop({ reflect: false, mutable: false }) val!: Record<string, any>;

  render() {
    const v = this.val ?? {};
    return (
      <div>
        <p>Type: Object | reflect: false | mutable: false</p>
        <p>Value: {JSON.stringify(v)}</p>
      </div>
    );
  }
}
