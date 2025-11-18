import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-string-reflect-mutable',
  shadow: true,
})
export class PropStringReflectMutable {
  @Prop({ reflect: true, mutable: true }) val!: string;

  render() {
    const v = (this.val ?? '') || 'init';
    return (
      <div>
        <p>Type: string | reflect: true | mutable: true</p>
        <p>Value: {v}</p>
      </div>
    );
  }
}
