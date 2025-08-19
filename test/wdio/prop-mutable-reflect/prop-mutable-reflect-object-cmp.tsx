import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'prop-mutable-reflect-object-cmp',
})
export class PropMutableReflectObjectCmp {
  @Prop({ mutable: true, reflect: true }) mutableReflectObject: any = { a: 1, b: 2 };

  render() {
    return (
      <div>
        <p>mutableReflectObject: {JSON.stringify(this.mutableReflectObject)}</p>
      </div>
    );
  }
}
