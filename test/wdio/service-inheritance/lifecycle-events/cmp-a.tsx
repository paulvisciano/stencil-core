import { Component, h, State } from '@stencil/core';
import { ServiceBase } from './service-base';

@Component({ tag: 'lifecycle-cpm-a' })
export class LifecycleComponentA extends ServiceBase {
  @State() value: string = '';
  @State() loads: string[] = [];
  @State() updates: string[] = [];
  @State() serviceCalls: number = 0;

  private click = () => {
    this.value = 'updated';
    this.useService();
  };

  render() {
    return (
      <div>
        <button class="go" onClick={this.click}>Go</button>
        <div class="loads">{this.loads.join('|')}</div>
        <div class="updates">{this.updates.join('|')}</div>
        <div class="calls">{this.serviceCalls}</div>
      </div>
    );
  }
}
