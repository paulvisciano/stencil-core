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
  @Prop({ mutable : false}) myObject: MyObject = { a: 1, b: 2 };

  private tryMutate = () => {
    this.myObject = { a: 2, b: 3 };
  };

  render() {
    return (
      <div>
        <p>myObject: {JSON.stringify(this.myObject)}</p>
        <button onClick={this.tryMutate}>Mutate Internally</button>
      </div>
    );
  }
}
