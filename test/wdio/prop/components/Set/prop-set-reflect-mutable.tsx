import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-set-reflect-mutable',
  shadow: true,
})
export class PropSetReflectMutable {
  @Prop({ reflect: true, mutable: true }) val!: Set<string>;

  render() {
    const v = this.val ?? new Set();
    return (
      <div>
        <p>Type: Set | reflect: true | mutable: true</p>
        <p>Value: {Array.from(v).join(',')}</p>
      </div>
    );
  }
}
