import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'prop-mutable-reflect-string-cmp',
})
export class PropMutableReflectStringCmp {
  @Prop({ mutable: true, reflect: true }) mutableReflectString = 'initial';

  render() {
    return (
      <div>
        <p>mutableReflectString: {this.mutableReflectString}</p>
      </div>
    );
  }
}
