import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-no-mutable-number-cmp',
})
export class PropNoMutableNumberCmp {
  @Prop({ mutable: false }) myNumber: number = 1;

  private tryMutate = () => {
    this.myNumber = 42;
  };

  render() {
    return (
      <div>
        <p>myNumber: {this.myNumber}</p>
        <button onClick={this.tryMutate}>Mutate Internally</button>
      </div>
    );
  }
}
