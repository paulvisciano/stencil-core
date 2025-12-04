import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-number-reflect-mutable',
  shadow: true,
})
export class PropNumberReflectMutable {
  @Prop({ reflect: true, mutable: true }) val!: number;

  render() {
    const v = this.val ?? 0;
    return (
      <div>
        <p>Type: number | reflect: true | mutable: true</p>
        <p>Value: {v}</p>
      </div>
    );
  }
}
