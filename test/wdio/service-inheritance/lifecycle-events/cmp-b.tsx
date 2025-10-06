import { Component, h, State } from '@stencil/core';
import { ServiceBase } from './service-base.js';

@Component({ tag: 'lifecycle-cpm-b' })
export class LifecycleComponentB extends ServiceBase {
  @State() value: string = '';
  @State() serviceCalls: number = 0;
  // lifecycle counters
  @State() connected: number = 0;
  @State() disconnected: number = 0;
  @State() willRender: number = 0;
  @State() didRender: number = 0;
  @State() willLoad: number = 0;
  @State() didLoad: number = 0;
  @State() willUpdate: number = 0;
  @State() didUpdate: number = 0;

  render() {
    return (
      <div>
        <div class="calls">{this.serviceCalls}</div>
        <div class="connected">{this.connected}</div>
        <div class="disconnected">{this.disconnected}</div>
        <div class="willRender">{this.willRender}</div>
        <div class="didRender">{this.didRender}</div>
        <div class="willLoad">{this.willLoad}</div>
        <div class="didLoad">{this.didLoad}</div>
        <div class="willUpdate">{this.willUpdate}</div>
        <div class="didUpdate">{this.didUpdate}</div>
      </div>
    );
  }
}
