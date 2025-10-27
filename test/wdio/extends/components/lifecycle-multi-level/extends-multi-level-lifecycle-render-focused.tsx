import { Component, h, State } from '@stencil/core';
import { ParentBase } from './parent-base.js';

@Component({
  tag: 'extends-multi-level-lifecycle-render-focused',
  shadow: true,
})
export class ExtendsMultiLevelLifecycleRenderFocused extends ParentBase {
  @State() value: string = '';
  @State() updateTrigger: number = 0;
  private triggerUpdate = () => {
    this.value = 'updated-' + Date.now();
    this.updateTrigger++;
  };

  render() {
    return (
      <div>
        <h2>Test Case #1: render-focused lifecycle</h2>
        <p>Inheritance: {this.constructor.name} → ParentBase → GrandParentBase</p>
        <p>Current Value: {this.value}</p>
        <button class="trigger-update" onClick={this.triggerUpdate}>Trigger Update</button>
        <button class="trigger-disconnect" onClick={() => this.remove()}>Test Disconnect</button>
        
        <div class="lifecycle-markers render-focused">
          <h3>Render Lifecycle Focus</h3>
          <div class="render-will">GP:{this.grandparentWillRender} | P:{this.parentWillRender}</div>
          <div class="render-did">GP:{this.grandparentDidRender} | P:{this.parentDidRender}</div>
          <div class="render-cycles">Update Trigger: {this.updateTrigger}</div>
        </div>
      </div>
    );
  }
}