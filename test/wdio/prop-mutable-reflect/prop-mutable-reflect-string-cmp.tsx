import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'prop-mutable-reflect-string-cmp',
})
export class PropMutableReflectStringCmp {
  @Prop({ mutable: true, reflect: true }) mutableReflectString = 'initial';

  private mutateProperty = () => {
    this.mutableReflectString = 'changed';
  };

  render() {
    return (
      <div>
        <p>mutableReflectString: {this.mutableReflectString}</p>
        <button onClick={this.mutateProperty}>Mutate</button>
      </div>
    );
  }
}
