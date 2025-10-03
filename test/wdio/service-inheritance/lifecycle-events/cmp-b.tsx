import { Component, h, State } from '@stencil/core';
import { ServiceBase } from './service-base';

@Component({ tag: 'lifecycle-cpm-b' })
export class LifecycleComponentB extends ServiceBase {
  @State() value: string = '';
  @State() loads: string[] = [];
  @State() updates: string[] = [];
  @State() serviceCalls: number = 0;

  render() {
    return (
      <div>
        <div class="loads">{this.loads.join('|')}</div>
        <div class="updates">{this.updates.join('|')}</div>
        <div class="calls">{this.serviceCalls}</div>
      </div>
    );
  }
}
