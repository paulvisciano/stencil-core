import { Component, State, h } from '@stencil/core';

// Base class that only declares reactive @State fields
class StateBase {
  @State() count: number = 0;
}

// Component extends the base and updates the inherited state
@Component({ tag: 'cmp-state-base' })
export class ComponentStateBase extends StateBase {
  private inc = () => {
    this.count += 1;
  };

  render() {
    return (
      <div>
        <button class="inc" onClick={this.inc}>Inc</button>
        <div class="count">{this.count}</div>
      </div>
    );
  }
}
