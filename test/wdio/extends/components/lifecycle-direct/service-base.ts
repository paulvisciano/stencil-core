// A plain base "service" class (not decorated with @Component)
// Following the WORKING pattern from service-inheritance/lifecycle-events/service-base.ts
// Provides lifecycle hooks via inheritance with proper ES2022 compatibility

export class ServiceBase {
  // Lifecycle hooks executed on derived components via prototype inheritance
  componentWillLoad(this: any) {
    this.willLoad = (this.willLoad ?? 0) + 1;
    console.info('ServiceBase componentWillLoad:', this.willLoad);
  }

  componentDidLoad(this: any) {
    this.didLoad = (this.didLoad ?? 0) + 1;
    console.info('ServiceBase componentDidLoad:', this.didLoad);
  }

  componentWillRender(this: any) {
    this.willRender = (this.willRender ?? 0) + 1;
    console.info('ServiceBase componentWillRender:', this.willRender);
  }

  componentDidRender(this: any) {
    this.didRender = (this.didRender ?? 0) + 1;
    console.info('ServiceBase componentDidRender:', this.didRender);
  }

  componentWillUpdate(this: any) {
    this.willUpdate = (this.willUpdate ?? 0) + 1;
    console.info('ServiceBase componentWillUpdate:', this.willUpdate);
  }

  componentDidUpdate(this: any) {
    this.didUpdate = (this.didUpdate ?? 0) + 1;
    console.info('ServiceBase componentDidUpdate:', this.didUpdate);
  }
}
