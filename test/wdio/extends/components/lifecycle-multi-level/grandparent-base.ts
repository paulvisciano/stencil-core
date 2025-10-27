// GrandParent base class - defines core lifecycle tracking
export class GrandParentBase {
  // Lifecycle counters for GrandParent level
  grandparentConnected = 0;
  grandparentDisconnected = 0;
  grandparentWillLoad = 0;
  grandparentDidLoad = 0;
  grandparentWillRender = 0;
  grandparentDidRender = 0;
  grandparentWillUpdate = 0;
  grandparentDidUpdate = 0;

  connectedCallback() {
    this.grandparentConnected++;
    console.info('GrandParent connectedCallback:', this.grandparentConnected);
  }

  disconnectedCallback() {
    this.grandparentDisconnected++;
    console.info('GrandParent disconnectedCallback:', this.grandparentDisconnected);
  }

  componentWillLoad() {
    this.grandparentWillLoad++;
    console.info('GrandParent componentWillLoad:', this.grandparentWillLoad);
  }

  componentDidLoad() {
    this.grandparentDidLoad++;
    console.info('GrandParent componentDidLoad:', this.grandparentDidLoad);
  }

  componentWillRender() {
    this.grandparentWillRender++;
    console.info('GrandParent componentWillRender:', this.grandparentWillRender);
  }

  componentDidRender() {
    this.grandparentDidRender++;
    console.info('GrandParent componentDidRender:', this.grandparentDidRender);
  }

  componentWillUpdate() {
    this.grandparentWillUpdate++;
    console.info('GrandParent componentWillUpdate:', this.grandparentWillUpdate);
  }

  componentDidUpdate() {
    this.grandparentDidUpdate++;
    console.info('GrandParent componentDidUpdate:', this.grandparentDidUpdate);
  }
}
