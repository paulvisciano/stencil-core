import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-reflect-array',
})
export class PropReflectArray {
  @Prop({ reflect: true }) val: any[] = [];

  render() {
    return <div>{JSON.stringify(this.val)}</div>;
  }
}
