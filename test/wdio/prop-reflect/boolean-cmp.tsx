import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-reflect-boolean',
})
export class PropReflectBoolean {
  @Prop({ reflect: true }) val: boolean = false;

  render() {
    return <div>{String(this.val)}</div>;
  }
}
