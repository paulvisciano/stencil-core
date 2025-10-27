import { GrandParentBase } from './grandparent-base.js';

// Parent base class - extends GrandParent and adds parent-level lifecycle tracking
export class ParentBase extends GrandParentBase {
  // Lifecycle counters for Parent level
  parentConnected = 0;
  parentDisconnected = 0;
  parentWillLoad = 0;
  parentDidLoad = 0;
  parentWillRender = 0;
  parentDidRender = 0;
  parentWillUpdate = 0;
  parentDidUpdate = 0;

  connectedCallback() {
    super.connectedCallback();
    this.parentConnected++;
    console.info('Parent connectedCallback:', this.parentConnected);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.parentDisconnected++;
    console.info('Parent disconnectedCallback:', this.parentDisconnected);
  }

  componentWillLoad() {
    super.componentWillLoad();
    this.parentWillLoad++;
    console.info('Parent componentWillLoad:', this.parentWillLoad);
  }

  componentDidLoad() {
    super.componentDidLoad();
    this.parentDidLoad++;
    console.info('Parent componentDidLoad:', this.parentDidLoad);
  }

  componentWillRender() {
    super.componentWillRender();
    this.parentWillRender++;
    console.info('Parent componentWillRender:', this.parentWillRender);
  }

  componentDidRender() {
    super.componentDidRender();
    this.parentDidRender++;
    console.info('Parent componentDidRender:', this.parentDidRender);
  }

  componentWillUpdate() {
    super.componentWillUpdate();
    this.parentWillUpdate++;
    console.info('Parent componentWillUpdate:', this.parentWillUpdate);
  }

  componentDidUpdate() {
    super.componentDidUpdate();
    this.parentDidUpdate++;
    console.info('Parent componentDidUpdate:', this.parentDidUpdate);
  }
}
