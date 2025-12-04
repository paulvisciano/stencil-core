import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-reflect-set',
})
export class PropReflectSet {
  @Prop({ reflect: true }) val: Set<any> = new Set();

  render() {
    return <div>{JSON.stringify(Array.from(this.val))}</div>;
  }
}
