import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'prop-no-mutable-reflect-set-cmp',
})
export class PropNoMutableReflectSetCmp {
  @Prop({ reflect: true }) mySet: Set<number> = new Set([1, 2, 3]);

  private handleClick = () => {
    this.mySet.add(4);
  };

  render() {
    return (
      <div>
        <p>mySet: {JSON.stringify(Array.from(this.mySet))}</p>
        <button onClick={this.handleClick}>Mutate</button>
      </div>
    );
  }
}
