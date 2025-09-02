import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-no-mutable-array-cmp',
})
export class PropNoMutableArrayCmp {
  @Prop({ mutable: false }) myArray: number[] = [1, 2, 3];

  private tryMutate = () => {
    this.myArray = [4, 5, 6];
  };

  render() {
    return (
      <div>
        <p>myArray: {JSON.stringify(this.myArray)}</p>
        <button onClick={this.tryMutate}>Mutate Internally</button>
      </div>
    );
  }
}
