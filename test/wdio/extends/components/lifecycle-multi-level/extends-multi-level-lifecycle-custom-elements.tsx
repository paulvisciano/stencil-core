import { Component, h, State } from '@stencil/core';
import { ParentBase } from './parent-base.js';

@Component({
  tag: 'extends-multi-level-lifecycle-custom-elements',
  shadow: true,
})
export class ExtendsMultiLevelLifecycleCustomElements extends ParentBase {
  @State() value: string = '';
  @State() updateTrigger: number = 0;
  private triggerUpdate = () => {
    this.value = 'updated-' + Date.now();
    this.updateTrigger++;
  };

  render() {
    return (
      <div>
        <h2>Test Case #1: custom-elements lifecycle</h2>
        <p>Inheritance: {this.constructor.name} → ParentBase → GrandParentBase</p>
        <p>Current Value: {this.value}</p>
        <button class="trigger-update" onClick={this.triggerUpdate}>Trigger Update</button>
        <button class="trigger-disconnect" onClick={() => this.remove()}>Test Disconnect</button>
        
        <div class="lifecycle-markers custom-elements">
          <h3>Custom Elements Lifecycle</h3>
          <div class="ce-connected">GP:{this.grandparentConnected} | P:{this.parentConnected}</div>
          <div class="ce-disconnected">GP:{this.grandparentDisconnected} | P:{this.parentDisconnected}</div>
        </div>
      </div>
    );
  }
}