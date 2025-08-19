import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'prop-mutable-reflect-array-cmp',
})
export class PropMutableReflectArrayCmp {
  @Prop({ mutable: true, reflect: true }) mutableReflectArray = [1, 2, 3];

  render() {
    return (
      <div>
        <p>mutableReflectArray: {JSON.stringify(this.mutableReflectArray)}</p>
      </div>
    );
  }
}
