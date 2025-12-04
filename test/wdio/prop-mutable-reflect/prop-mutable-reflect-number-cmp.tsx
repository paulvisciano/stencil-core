import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'prop-mutable-reflect-number-cmp',
})
export class PropMutableReflectNumberCmp {
  @Prop({ mutable: true, reflect: true }) mutableReflectNumber = 1;

  private mutateProperty = () => {
    this.mutableReflectNumber = 2;
  };

  render() {
    return (
      <div>
        <p>mutableReflectNumber: {this.mutableReflectNumber}</p>
        <button onClick={this.mutateProperty}>Mutate</button>
      </div>
    );
  }
}
