import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'prop-mutable-array-cmp',
})
export class PropMutableArrayCmp {
  @Prop({ mutable: true }) mutableArray: number[] = [1, 2, 3];

  private mutateProperty = () => {
    this.mutableArray = [4, 5, 6];
  };

  render() {
    return (
      <div>
        <p>mutableArray: {JSON.stringify(this.mutableArray)}</p>
        <button onClick={this.mutateProperty}>Mutate</button>
      </div>
    );
  }
}
