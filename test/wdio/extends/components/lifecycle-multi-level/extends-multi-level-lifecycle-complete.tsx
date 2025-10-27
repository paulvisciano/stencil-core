import { Component, h, State } from '@stencil/core';
import { ParentBase } from './parent-base.js';

@Component({
  tag: 'extends-multi-level-lifecycle-complete',
  shadow: true,
})
export class ExtendsMultiLevelLifecycleComplete extends ParentBase {
  @State() value: string = '';
  @State() updateTrigger: number = 0;
  private triggerUpdate = () => {
    this.value = 'updated-' + Date.now();
    this.updateTrigger++;
  };

  render() {
    return (
      <div>
        <h2>Test Case #1: complete lifecycle</h2>
        <p>Inheritance: {this.constructor.name} → ParentBase → GrandParentBase</p>
        <p>Current Value: {this.value}</p>
        <button class="trigger-update" onClick={this.triggerUpdate}>Trigger Update</button>
        <button class="trigger-disconnect" onClick={() => this.remove()}>Test Disconnect</button>
        
        <div class="lifecycle-markers">
          <h3>GrandParent Lifecycle Counters</h3>
          <div class="grandparent-connected">{this.grandparentConnected}</div>
          <div class="grandparent-disconnected">{this.grandparentDisconnected}</div>
          <div class="grandparent-will-load">{this.grandparentWillLoad}</div>
          <div class="grandparent-did-load">{this.grandparentDidLoad}</div>
          <div class="grandparent-will-render">{this.grandparentWillRender}</div>
          <div class="grandparent-did-render">{this.grandparentDidRender}</div>
          <div class="grandparent-will-update">{this.grandparentWillUpdate}</div>
          <div class="grandparent-did-update">{this.grandparentDidUpdate}</div>
          
          <h3>Parent Lifecycle Counters</h3>
          <div class="parent-connected">{this.parentConnected}</div>
          <div class="parent-disconnected">{this.parentDisconnected}</div>
          <div class="parent-will-load">{this.parentWillLoad}</div>
          <div class="parent-did-load">{this.parentDidLoad}</div>
          <div class="parent-will-render">{this.parentWillRender}</div>
          <div class="parent-did-render">{this.parentDidRender}</div>
          <div class="parent-will-update">{this.parentWillUpdate}</div>
          <div class="parent-did-update">{this.parentDidUpdate}</div>
        </div>
      </div>
    );
  }
}