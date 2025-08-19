import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'prop-no-mutable-object-cmp',
})
export class PropNoMutableObjectCmp {
  @Prop() myObject: any = { a: 1, b: 2 };

  render() {
    return (
      <div>
        <p>myObject: {JSON.stringify(this.myObject)}</p>
      </div>
    );
  }
}
