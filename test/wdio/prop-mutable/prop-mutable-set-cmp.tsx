import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'prop-mutable-set-cmp',
})
export class PropMutableSetCmp {
  @Prop({ mutable: true }) mutableSet = new Set([1, 2, 3]);

  private mutateProperty = () => {
    this.mutableSet = new Set([4, 5, 6]);
  };

  render() {
    return (
      <div>
        <p>mutableSet: {JSON.stringify(Array.from(this.mutableSet))}</p>
        <button onClick={this.mutateProperty}>Mutate</button>
      </div>
    );
  }
}
