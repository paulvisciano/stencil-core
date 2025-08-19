import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'prop-mutable-reflect-set-cmp',
})
export class PropMutableReflectSetCmp {
  @Prop({ mutable: true, reflect: true }) mutableReflectSet = new Set([1, 2, 3]);

  render() {
    return (
      <div>
        <p>mutableReflectSet: {JSON.stringify(Array.from(this.mutableReflectSet))}</p>
      </div>
    );
  }
}
