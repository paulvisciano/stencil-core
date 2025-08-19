import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'prop-mutable-array-cmp',
})
export class PropMutableArrayCmp {
  @Prop({ mutable: true }) mutableArray = [1, 2, 3];

  render() {
    return (
      <div>
        <p>mutableArray: {JSON.stringify(this.mutableArray)}</p>
      </div>
    );
  }
}
