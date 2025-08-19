import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'prop-mutable-string-cmp',
})
export class PropMutableStringCmp {
  @Prop({ mutable: true })
  mutableString = 'initial';

  @Prop({ mutable: true, reflect: true })
  mutableReflectString = 'initial';

  render() {
    return (
      <div>
        <p>mutableString: {this.mutableString}</p>
        <p>mutableReflectString: {this.mutableReflectString}</p>
      </div>
    );
  }
}
