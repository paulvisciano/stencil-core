// Stencil-decorated base class for proper inheritance - LIFECYCLE FOCUSED
// Following the working pattern from ts-target extends tests
import { State } from '@stencil/core';

export class ServiceBase {
  @State() willLoad = 0;
  @State() didLoad = 0;
  @State() willUpdate = 0;
  @State() didUpdate = 0;
  @State() willRender = 0;
  @State() didRender = 0;

  componentWillLoad() {
    this.willLoad++;
    console.info('ServiceBase componentWillLoad:', this.willLoad);
  }

  componentDidLoad() {
    this.didLoad++;
    console.info('ServiceBase componentDidLoad:', this.didLoad);
  }

  componentWillRender() {
    this.willRender++;
    console.info('ServiceBase componentWillRender:', this.willRender);
  }

  componentDidRender() {
    this.didRender++;
    console.info('ServiceBase componentDidRender:', this.didRender);
  }

  componentWillUpdate() {
    this.willUpdate++;
    console.info('ServiceBase componentWillUpdate:', this.willUpdate);
  }

  componentDidUpdate() {
    this.didUpdate++;
    console.info('ServiceBase componentDidUpdate:', this.didUpdate);
  }
}
