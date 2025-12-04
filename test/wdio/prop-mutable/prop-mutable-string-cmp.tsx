import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'prop-mutable-string-cmp',
})
export class PropMutableStringCmp {
  @Prop({ mutable: true }) mutableString = 'initial';

  private mutateProperty = () => {
    this.mutableString = 'changed';
  };

  render() {
    return (
      <div>
        <p>mutableString: {this.mutableString}</p>
        <button onClick={this.mutateProperty}>Mutate</button>
      </div>
    );
  }
}
