import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'prop-mutable-reflect-set-cmp',
})
export class PropMutableReflectSetCmp {
  @Prop({ mutable: true, reflect: true }) mutableReflectSet = new Set([1, 2, 3]);

  private mutateProperty = () => {
    this.mutableReflectSet = new Set([4, 5, 6]);
  };

  render() {
    return (
      <div>
        <p>mutableReflectSet: {JSON.stringify(Array.from(this.mutableReflectSet))}</p>
        <button onClick={this.mutateProperty}>Mutate</button>
      </div>
    );
  }
}
