import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'prop-mutable-object-cmp',
})
export class PropMutableObjectCmp {
  @Prop({ mutable: true }) mutableObject: any = { a: 1, b: 2 };

  private mutateProperty = () => {
    this.mutableObject = { c: 3, d: 4 };
  };

  render() {
    return (
      <div>
        <p>mutableObject: {JSON.stringify(this.mutableObject)}</p>
        <button onClick={this.mutateProperty}>Mutate</button>
      </div>
    );
  }
}
