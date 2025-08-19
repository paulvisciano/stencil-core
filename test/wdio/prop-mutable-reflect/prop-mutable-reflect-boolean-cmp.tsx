import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'prop-mutable-reflect-boolean-cmp',
})
export class PropMutableReflectBooleanCmp {
  @Prop({ mutable: true, reflect: true }) mutableReflectFalse = false;

  render() {
    return (
      <div>
        <p>mutableReflectFalse: {String(this.mutableReflectFalse)}</p>
      </div>
    );
  }
}
