import { Component, h, Prop } from '@stencil/core';

interface MyObject {
  a: number;
  b: number;
  c?: number;
}

@Component({
  tag: 'prop-no-mutable-object-cmp',
})
export class PropNoMutableObjectCmp {
  @Prop() myObject: MyObject = { a: 1, b: 2 };

  private handleClick = () => {
    this.myObject.c = 3;
  };

  render() {
    return (
      <div>
        <p>myObject: {JSON.stringify(this.myObject)}</p>
        <button onClick={this.handleClick}>Mutate</button>
      </div>
    );
  }
}
