import { Component, h, State } from '@stencil/core';
import { ServiceBase } from './service-base.js';

@Component({
  tag: 'extends-direct-lifecycle-basic',
  shadow: true,
})
export class ExtendsDirectLifecycleBasic extends ServiceBase {
  @State() value: string = '';

  private triggerStateUpdate = () => {
    this.value = 'updated';
  };

  render() {
    return (
      <div>
        <h2>Test Case #1: basic lifecycle</h2>
        <p>Inheritance: {this.constructor.name} → ServiceBase</p>
        <p>Current Value: {this.value}</p>
        <button class="trigger-update" onClick={this.triggerStateUpdate}>Trigger Update</button>
        
        <div class="lifecycle-markers direct">
          <div class="lifecycle-basic">Will Load: {this.willLoad || 0} | Did Load: {this.didLoad || 0}</div>
          <div class="lifecycle-update">Will Update: {this.willUpdate || 0} | Did Update: {this.didUpdate || 0}</div>
          <div class="lifecycle-render">Will Render: {this.willRender || 0} | Did Render: {this.didRender || 0}</div>
        </div>
      </div>
    );
  }
}