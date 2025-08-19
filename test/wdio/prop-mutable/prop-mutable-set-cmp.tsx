import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'prop-mutable-set-cmp',
})
export class PropMutableSetCmp {
  @Prop({ mutable: true }) mutableSet = new Set([1, 2, 3]);

  render() {
    return (
      <div>
        <p>mutableSet: {JSON.stringify(Array.from(this.mutableSet))}</p>
      </div>
    );
  }
}
