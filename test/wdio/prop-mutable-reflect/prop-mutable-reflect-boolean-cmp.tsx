import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'prop-mutable-reflect-boolean-cmp',
})
export class PropMutableReflectBooleanCmp {
  @Prop({ mutable: true, reflect: true }) mutableReflect = false;

  private mutateProperty = () => {
    this.mutableReflect = !this.mutableReflect;
  };

  render() {
    return (
      <div>
        <p>mutableReflect: {this.mutableReflect.toString()}</p>
        <button onClick={this.mutateProperty}>Mutate</button>
      </div>
    );
  }
}
