import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-no-mutable-string-cmp',
})
export class PropNoMutableStringCmp {
  @Prop({ mutable: false }) myString: string = 'initial';

  private tryMutate = () => {
    this.myString = 'mutated';
  };

  render() {
    return (
      <div>
        <p>myString: {this.myString}</p>
        <button onClick={this.tryMutate}>Mutate Internally</button>
      </div>
    );
  }
}
