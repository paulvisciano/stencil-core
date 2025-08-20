import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'prop-mutable-reflect-object-cmp',
})
export class PropMutableReflectObjectCmp {
  @Prop({ mutable: true, reflect: true }) mutableReflectObject: any = { a: 1, b: 2 };

  private mutateProperty = () => {
    this.mutableReflectObject = { c: 3, d: 4 };
  };

  render() {
    return (
      <div>
        <p>mutableReflectObject: {JSON.stringify(this.mutableReflectObject)}</p>
        <button onClick={this.mutateProperty}>Mutate</button>
      </div>
    );
  }
}
