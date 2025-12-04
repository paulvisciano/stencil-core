import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-reflect-object',
})
export class PropReflectObject {
  @Prop({ reflect: true }) val: object = {};

  render() {
    return <div>{JSON.stringify(this.val)}</div>;
  }
}
