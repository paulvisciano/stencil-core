import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-boolean-reflect-false-mutable-false',
  shadow: true,
})
export class PropBooleanReflectFalseMutableFalse {
  @Prop({ reflect: false, mutable: false }) val!: boolean;

  render() {
    const v = this.val ?? false;
    return (
      <div>
        <p>Type: boolean | reflect: false | mutable: false</p>
        <p>Value: {v ? 'true' : 'false'}</p>
      </div>
    );
  }
}
