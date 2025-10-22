import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-boolean-reflect-mutable',
  shadow: true,
})
export class PropBooleanReflectMutable {
  @Prop({ reflect: true, mutable: true }) val!: boolean;

  render() {
    const v = this.val ?? false;
    return (
      <div>
        <p>Type: boolean | reflect: true | mutable: true</p>
        <p>Value: {v ? 'true' : 'false'}</p>
      </div>
    );
  }
}
