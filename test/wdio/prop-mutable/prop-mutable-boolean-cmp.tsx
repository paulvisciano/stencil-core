import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'prop-mutable-boolean-cmp',
})
export class PropMutableBooleanCmp {
  @Prop({ mutable: true }) mutableFalse = false;

  render() {
    return (
      <div>
        <p>mutableFalse: {String(this.mutableFalse)}</p>
      </div>
    );
  }
}
