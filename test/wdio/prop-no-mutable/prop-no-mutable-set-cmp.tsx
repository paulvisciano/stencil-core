import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'prop-no-mutable-set-cmp',
})
export class PropNoMutableSetCmp {
  @Prop({ reflect : false, mutable : false }) mySet: Set<number> = new Set([1, 2, 3]);

  render() {
    return (
      <div>
        <p>mySet: {JSON.stringify(Array.from(this.mySet))}</p>
      </div>
    );
  }
}
