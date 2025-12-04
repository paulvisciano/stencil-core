import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'prop-mutable-boolean-cmp',
})
export class PropMutableBooleanCmp {
  @Prop({ mutable: true }) mutableFalse = false;

  private mutateProperty = () => {
    this.mutableFalse = true;
  };

  render() {
    return (
      <div>
        <p>mutableFalse: {String(this.mutableFalse)}</p>
        <button onClick={this.mutateProperty}>Mutate</button>
      </div>
    );
  }
}
