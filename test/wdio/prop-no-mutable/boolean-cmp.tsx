import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-no-mutable-boolean-cmp',
})
export class PropNoMutableBooleanCmp {
  @Prop({ mutable: false }) myBool: boolean = false;

  private tryMutate = () => {
    this.myBool = true;
  };

  render() {
    return (
      <div>
        <p>myBool: {String(this.myBool)}</p>
        <button onClick={this.tryMutate}>Mutate Internally</button>
      </div>
    );
  }
}
