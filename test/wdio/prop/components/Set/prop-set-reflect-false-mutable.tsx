import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-set-reflect-false-mutable',
  shadow: true,
})
export class PropSetReflectFalseMutable {
  @Prop({ reflect: false, mutable: true }) val!: Set<string>;

  render() {
    const v = this.val ?? new Set();
    return (
      <div>
        <p>Type: Set | reflect: false | mutable: true</p>
        <p>Value: {Array.from(v).join(',')}</p>
      </div>
    );
  }
}
