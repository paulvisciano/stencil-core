import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'prop-mutable-string-cmp',
})
export class PropMutableStringCmp {
  @Prop({ mutable: true }) mutableString = 'initial';

  render() {
    return (
      <div>
        <p>mutableString: {this.mutableString}</p>
      </div>
    );
  }
}
