// A plain base "service" class (not decorated with @Component)
// Provides shared logic and taps into lifecycle hooks via inheritance.

export class ServiceBase {
  // Shared method used by derived components
  useService(this: any) {
    // increment a shared counter on the host
    this.serviceCalls = (this.serviceCalls ?? 0) + 1;
  }

  // Lifecycle: Custom Elements
  connectedCallback(this: any) {
    this.connected = (this.connected ?? 0) + 1;
  }
  disconnectedCallback(this: any) {
    this.disconnected = (this.disconnected ?? 0) + 1;
  }

  // Stencil render lifecycles
  componentWillRender(this: any) {
    this.willRender = (this.willRender ?? 0) + 1;
  }
  componentDidRender(this: any) {
    this.didRender = (this.didRender ?? 0) + 1;
  }

  // Lifecycle hooks executed on derived components via prototype inheritance
  componentWillLoad(this: any) {
    this.willLoad = (this.willLoad ?? 0) + 1;
  }
  componentDidLoad(this: any) {
    this.didLoad = (this.didLoad ?? 0) + 1;
  }
  componentWillUpdate(this: any) {
    // only log once per host value change to mirror other tests
    if (this.value === 'updated' && !this.__baseWillUpdated) {
      this.__baseWillUpdated = true;
      this.willUpdate = (this.willUpdate ?? 0) + 1;
    }
  }
  componentDidUpdate(this: any) {
    if (this.value === 'updated' && !this.__baseDidUpdated) {
      this.__baseDidUpdated = true;
      this.didUpdate = (this.didUpdate ?? 0) + 1;
    }
  }
}
