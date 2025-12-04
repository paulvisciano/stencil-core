import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'prop-no-mutable-reflect-set-cmp',
})
export class PropNoMutableReflectSetCmp {
  @Prop({ mutable: false }) mySet: Set<number> = new Set([1, 2, 3]);

  private tryMutate = () => {
    this.mySet = new Set([4, 5, 6]);
  };

  render() {
    return (
      <div>
        <p>mySet: {JSON.stringify(Array.from(this.mySet))}</p>
        <button onClick={this.tryMutate}>Mutate Internally</button>
      </div>
    );
  }
}
