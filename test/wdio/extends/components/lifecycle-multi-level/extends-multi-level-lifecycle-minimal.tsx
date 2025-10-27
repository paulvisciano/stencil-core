import { Component, h, State } from '@stencil/core';
import { ParentBase } from './parent-base.js';

@Component({
  tag: 'extends-multi-level-lifecycle-minimal',
  shadow: true,
})
export class ExtendsMultiLevelLifecycleMinimal extends ParentBase {
  @State() value: string = '';
  @State() updateTrigger: number = 0;
  private triggerUpdate = () => {
    this.value = 'updated-' + Date.now();
    this.updateTrigger++;
  };

  render() {
    return (
      <div>
        <h2>Test Case #1: minimal lifecycle</h2>
        <p>Inheritance: {this.constructor.name} → ParentBase → GrandParentBase</p>
        <p>Current Value: {this.value}</p>
        <button class="trigger-update" onClick={this.triggerUpdate}>Trigger Update</button>
        <button class="trigger-disconnect" onClick={() => this.remove()}>Test Disconnect</button>
        
        <div class="lifecycle-markers minimal">
          <h3>Core Lifecycle (GrandParent + Parent)</h3>
          <div class="core-will-load">GP:{this.grandparentWillLoad} | P:{this.parentWillLoad}</div>
          <div class="core-did-load">GP:{this.grandparentDidLoad} | P:{this.parentDidLoad}</div>
          <div class="core-will-update">GP:{this.grandparentWillUpdate} | P:{this.parentWillUpdate}</div>
          <div class="core-did-update">GP:{this.grandparentDidUpdate} | P:{this.parentDidUpdate}</div>
        </div>
      </div>
    );
  }
}