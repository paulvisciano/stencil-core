import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'prop-mutable-reflect-array-cmp',
})
export class PropMutableReflectArrayCmp {
  @Prop({ mutable: true, reflect: true }) mutableReflectArray: number[] = [1, 2, 3];

  private mutateProperty = () => {
    this.mutableReflectArray = [...[4, 5, 6]];
  };

  render() {
    return (
      <div>
        <p>mutableReflectArray: {JSON.stringify(this.mutableReflectArray)}</p>
        <button onClick={this.mutateProperty}>Mutate</button>
      </div>
    );
  }
}
