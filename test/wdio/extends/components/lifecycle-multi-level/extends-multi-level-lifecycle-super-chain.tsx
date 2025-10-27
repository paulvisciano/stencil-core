import { Component, h, State } from '@stencil/core';
import { ParentBase } from './parent-base.js';

@Component({
  tag: 'extends-multi-level-lifecycle-super-chain',
  shadow: true,
})
export class ExtendsMultiLevelLifecycleSuperChain extends ParentBase {
  @State() value: string = '';
  @State() updateTrigger: number = 0;
  private triggerUpdate = () => {
    this.value = 'updated-' + Date.now();
    this.updateTrigger++;
  };

  render() {
    return (
      <div>
        <h2>Test Case #1: super-chain lifecycle</h2>
        <p>Inheritance: {this.constructor.name} → ParentBase → GrandParentBase</p>
        <p>Current Value: {this.value}</p>
        <button class="trigger-update" onClick={this.triggerUpdate}>Trigger Update</button>
        <button class="trigger-disconnect" onClick={() => this.remove()}>Test Disconnect</button>
        
        <div class="lifecycle-markers super-chain">
          <h3>Super() Call Chain Verification</h3>
          <div class="chain-load">Load Chain: GP({this.grandparentWillLoad}) → P({this.parentWillLoad})</div>
          <div class="chain-update">Update Chain: GP({this.grandparentWillUpdate}) → P({this.parentWillUpdate})</div>
        </div>
      </div>
    );
  }
}