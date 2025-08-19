import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'prop-mutable-number-cmp',
})
export class PropMutableNumberCmp {
  @Prop({ mutable: true }) mutableNumber = 1;

  private mutateProperty = () => {
    this.mutableNumber = 2;
  };

  render() {
    return (
      <div>
        <p>mutableNumber: {this.mutableNumber}</p>
        <button onClick={this.mutateProperty}>Mutate</button>
      </div>
    );
  }
}
