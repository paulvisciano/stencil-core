// A plain base "service" class (not decorated with @Component)
// Provides shared logic and taps into lifecycle hooks via inheritance.

export class ServiceBase {
  // Shared method used by derived components
  useService(this: any) {
    // increment a shared counter on the host and mark an update
    this.serviceCalls = (this.serviceCalls ?? 0) + 1;
    this.updates = [...(this.updates ?? []), 'service:use'];
  }

  // Helpers to mutate state on the host (derived component)
  protected addLoad(this: any, label: string) {
    this.loads = [...(this.loads ?? []), label];
  }
  protected addUpdate(this: any, label: string) {
    this.updates = [...(this.updates ?? []), label];
  }

  // Lifecycle hooks executed on derived components via prototype inheritance
  componentWillLoad(this: any) {
    this.addLoad('base:willLoad');
  }
  componentDidLoad(this: any) {
    this.addLoad('base:didLoad');
  }
  componentWillUpdate(this: any) {
    // only log once per host value change to mirror other tests
    if (this.value === 'updated' && !this.__baseWillUpdated) {
      this.__baseWillUpdated = true;
      this.addUpdate('base:willUpdate');
    }
  }
  componentDidUpdate(this: any) {
    if (this.value === 'updated' && !this.__baseDidUpdated) {
      this.__baseDidUpdated = true;
      this.addUpdate('base:didUpdate');
    }
  }
}
