import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-C9JfSZFR.js";import{S as r,M as p}from"./blocks-D-NAOpI1.js";import{r as m}from"./iframe-sQV3dP9n.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BgekLC3r.js";const o=({id:t,tabs:s})=>{const[i,n]=m.useState(!1),c=()=>{const d=document.querySelector(`.code-tabset-${t} input:checked`)?.id===`tab-${t}-2`?`#panel-${t}-2`:`#panel-${t}-1`;document.querySelector(`${d} .docblock-source button`)?.dispatchEvent(new MouseEvent("click",{bubbles:!0})),n(!0),setTimeout(()=>n(!1),2e3)};return!s||s.length<2?e.jsx("div",{children:"Error: Invalid tabs configuration"}):e.jsxs("div",{className:`code-tabset code-tabset-${t}`,children:[e.jsx("input",{type:"radio",id:`tab-${t}-1`,name:`code-${t}`,defaultChecked:!0}),e.jsx("input",{type:"radio",id:`tab-${t}-2`,name:`code-${t}`}),e.jsxs("div",{className:"tab-labels",role:"tablist",children:[e.jsx("label",{htmlFor:`tab-${t}-1`,role:"tab","aria-controls":`panel-${t}-1`,children:s[0].label}),e.jsx("label",{htmlFor:`tab-${t}-2`,role:"tab","aria-controls":`panel-${t}-2`,children:s[1].label})]}),e.jsx("div",{className:"tab-panel component",id:`panel-${t}-1`,role:"tabpanel","aria-labelledby":`tab-${t}-1`,children:e.jsx(r,{language:s[0].language,code:s[0].code})}),e.jsx("div",{className:"tab-panel controller",id:`panel-${t}-2`,role:"tabpanel","aria-labelledby":`tab-${t}-2`,children:e.jsx(r,{language:s[1].language,code:s[1].code})}),e.jsx("div",{className:"tab-footer",children:e.jsx("button",{type:"button",className:"tab-copy",onClick:c,children:i?"Copied!":"Copy"})})]})},h=[{label:"Component (cmp.ts)",language:"ts",code:`import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {ClockController} from './clock-controller.js';

@customElement('my-element')
class MyElement extends LitElement {
  // Create the controller and store it
  private clock = new ClockController(this, 100);

  // Use the controller in render()
  render() {
    const formattedTime = timeFormat.format(this.clock.value);
    return html\`Current time: \${formattedTime}\`;
  }
}

const timeFormat = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric', minute: 'numeric', second: 'numeric',
});`},{label:"Controller (clock-controller.ts)",language:"ts",code:`import {ReactiveController, ReactiveControllerHost} from 'lit';

export class ClockController implements ReactiveController {
  host: ReactiveControllerHost;

  value = new Date();
  timeout: number;
  private _timerID?: number;

  constructor(host: ReactiveControllerHost, timeout = 1000) {
    (this.host = host).addController(this);
    this.timeout = timeout;
  }
  hostConnected() {
    // Start a timer when the host is connected
    this._timerID = setInterval(() => {
      this.value = new Date();
      // Update the host with new value
      this.host.requestUpdate();
    }, this.timeout);
  }
  hostDisconnected() {
    // Clear the timer when the host is disconnected
    clearInterval(this._timerID);
    this._timerID = undefined;
  }
}`}],u=[{label:"Component (cmp.tsx)",language:"tsx",code:`import { Component, h, State } from '@stencil/core';
import { ClockControllerBase } from './clock-controller-base.js';

@Component({
  tag: 'extends-controller-updates',
})
export class ControllerUpdatesCmp extends ClockControllerBase {
  // Component owns the @State - not the base class
  @State() currentTime: string = new Date().toLocaleTimeString();
  @State() isClockRunning: boolean = true;
  
  constructor() {
    super(); // No parameters needed
  }
  
  // Component implements the requestUpdate method (simulates Lit's this.host.requestUpdate())
  protected requestUpdate(): void {
    // Controller calls this method to request a re-render
    // Component updates its own @State which triggers re-render
    this.currentTime = this.getCurrentTimeValue();
  }
  
  toggleClock() {
    if (this.isClockRunning) {
      this.stopClock();
      this.isClockRunning = false;
    } else {
      this.startClock();
      this.isClockRunning = true;
    }
  }
  
  render() {
    return (
      <div>
        <h2>Controller-Initiated Updates Test</h2>
        
        <div class="clock-section">
          <h3>Clock Controller (requestUpdate Pattern)</h3>
          <p class="current-time">Current Time: {this.currentTime}</p>
          <button 
            class="toggle-clock" 
            onClick={() => this.toggleClock()}
          >
            {this.isClockRunning ? 'Stop Clock' : 'Start Clock'}
          </button>
        </div>
        
        <div class="status-info">
          <h3>How It Works</h3>
          <p class="clock-status">Clock Running: {this.isClockRunning ? 'Yes' : 'No'}</p>
          <p class="update-info">Base class calls requestUpdate() → Component updates @State → Re-render</p>
          <p class="inheritance-info">Simulates Lit's this.host.requestUpdate() pattern</p>
          <p class="pattern-info">@State lives on component, controller requests updates</p>
        </div>
      </div>
    );
  }
}`},{label:"Base Class (clock-controller-base.ts)",language:"ts",code:`/**
 * ClockController base class - demonstrates controller-initiated updates via requestUpdate pattern
 * Modeled after Lit's ClockController: https://lit.dev/docs/composition/controllers/#content
 * 
 * This base class:
 * 1. Manages timer lifecycle (start/stop)
 * 2. Requests host component updates via abstract requestUpdate() method
 * 3. Host component owns @State and implements requestUpdate()
 * 
 * This simulates Lit's this.host.requestUpdate() pattern
 */
export abstract class ClockControllerBase {
  private timer?: NodeJS.Timeout;
  private timerInterval: number;
  
  constructor() {
    this.timerInterval = 1000;
  }
  
  // Abstract method - host component must implement this
  // This simulates Lit's this.host.requestUpdate()
  protected abstract requestUpdate(): void;
  
  // Lifecycle methods that components can use
  componentDidLoad() {
    this.startClock();
  }
  
  disconnectedCallback() {
    this.stopClock();
  }
  
  // Controller methods - can be called by host component
  startClock() {
    if (this.timer) return; // Already running
    
    this.timer = setInterval(() => {
      // This simulates Lit's this.host.requestUpdate()
      // Controller tells host "please update yourself"
      this.requestUpdate();
    }, this.timerInterval);
  }
  
  stopClock() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }
  
  // Utility method for host to get current time
  protected getCurrentTimeValue(): string {
    return new Date().toLocaleTimeString();
  }
}`}],x=[{label:"Component (cmp.tsx)",language:"tsx",code:`import { Component, h } from '@stencil/core';
import { ClockBase } from './clock-base.js';

@Component({
  tag: 'extends-direct-state',
})
export class DirectStateCmp extends ClockBase {
  // Compare with Lit pattern:
  // Lit: private clock = new ClockController(this, 100);
  // Stencil: Just extend the base class - that's it!
  
  // No controller instance needed
  // No host reference needed
  // No manual requestUpdate() calls needed
  
  render() {
    return (
      <div>
        <h2>Direct State Management Test</h2>
        
        <div class="clock-section">
          <h3>Clock Controller (Direct State Pattern)</h3>
          <p class="current-time">Current Time: {this.currentTime}</p>
          <button 
            class="toggle-clock" 
            onClick={() => this.toggleClock()}
          >
            {this.isClockRunning ? 'Stop Clock' : 'Start Clock'}
          </button>
        </div>
        
        <div class="status-info">
          <h3>How It Works</h3>
          <p class="clock-status">Clock Running: {this.isClockRunning ? 'Yes' : 'No'}</p>
          <p class="update-info">Base class updates @State directly → Automatic re-render</p>
          <p class="inheritance-info">Leverages Stencil's superior extends functionality</p>
          <p class="pattern-info">@State lives on base class, no requestUpdate needed</p>
        </div>
        
        <div class="comparison-info">
          <h3>Comparison with Lit's ReactiveController Pattern</h3>
          <p class="simpler-info">✅ No ReactiveController interface to implement</p>
          <p class="direct-info">✅ No host reference needed in constructor</p>
          <p class="cleaner-info">✅ No host.requestUpdate() calls needed</p>
          <p class="stencil-info">✅ No controller instance creation on component</p>
          <p class="extends-info">✅ Just extend the base class and inherit @State directly</p>
        </div>
      </div>
    );
  }
}`},{label:"Base Class (clock-base.ts)",language:"ts",code:`import { State } from '@stencil/core';

/**
 * Simplified ClockBase class - demonstrates direct state management via Stencil's extends
 * 
 * Compare with Lit's ReactiveController pattern:
 * 
 * Lit Pattern:
 * - Controller extends ReactiveController interface
 * - Controller needs host reference: constructor(host: ReactiveControllerHost)
 * - Controller calls host.requestUpdate() to trigger re-renders
 * - Component creates controller instance: private clock = new ClockController(this)
 * - Component accesses controller.value in render()
 * 
 * Stencil Pattern (this class):
 * ✅ No interface to implement
 * ✅ No host reference needed
 * ✅ No requestUpdate() calls needed
 * ✅ Component just extends - no controller instance
 * ✅ Direct @State access in render()
 * 
 * This showcases Stencil's superior extends functionality
 */
export class ClockBase {
  @State() currentTime: string = new Date().toLocaleTimeString();
  @State() isClockRunning: boolean = true;
  
  private timer?: NodeJS.Timeout;
  private timerInterval: number = 1000;
  
  // Lifecycle methods
  componentDidLoad() {
    this.startClock();
  }
  
  disconnectedCallback() {
    this.stopClock();
  }
  
  // Clock control methods
  startClock() {
    if (this.timer) return; // Already running
    
    this.timer = setInterval(() => {
      // Direct state update - triggers re-render automatically
      // No requestUpdate() needed!
      this.currentTime = new Date().toLocaleTimeString();
    }, this.timerInterval);
  }
  
  stopClock() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }
  
  toggleClock() {
    if (this.isClockRunning) {
      this.stopClock();
      this.isClockRunning = false;
    } else {
      this.startClock();
      this.isClockRunning = true;
    }
  }
}`}];function l(t){const s={p:"p",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Testing/Behavior/Extends/Examples"}),`
`,`
`,`
`,`
`,`
`,e.jsxs("details",{className:"example-section",open:!0,children:[e.jsx("summary",{className:"example-title",children:"Example 1: Lit Reactive Controller Pattern"}),e.jsx("div",{style:{padding:"16px 20px 0",color:"#475569",fontSize:"0.95rem",lineHeight:"1.6"},children:e.jsx("p",{style:{margin:"0 0 16px"},children:e.jsxs(s.p,{children:["The original Lit pattern showing how components use reactive controllers. The component creates a controller instance and passes itself as the host, allowing the controller to trigger updates via ",e.jsx("code",{style:{background:"#f1f5f9",padding:"2px 6px",borderRadius:"4px",fontSize:"0.9em"},children:"this.host.requestUpdate()"}),"."]})})}),e.jsx(o,{id:"lit",tabs:h})]}),`
`,e.jsxs("details",{className:"example-section",children:[e.jsx("summary",{className:"example-title",children:"Example 2: Stencil Abstract Class with requestUpdate()"}),e.jsxs("div",{style:{padding:"16px 20px 0",color:"#475569",fontSize:"0.95rem",lineHeight:"1.6"},children:[e.jsx("p",{style:{margin:"0 0 16px"},children:e.jsx(s.p,{children:"Shows how Stencil can simulate Lit's pattern using an abstract base class:"})}),e.jsxs("ul",{style:{margin:"0 0 16px",paddingLeft:"24px"},children:[e.jsxs("li",{children:["The component owns the ",e.jsx("code",{style:{background:"#f1f5f9",padding:"2px 6px",borderRadius:"4px",fontSize:"0.9em"},children:"@State"})]}),e.jsxs("li",{children:["The base class is abstract and requires the component to implement ",e.jsx("code",{style:{background:"#f1f5f9",padding:"2px 6px",borderRadius:"4px",fontSize:"0.9em"},children:"requestUpdate()"})]}),e.jsxs("li",{children:["The base class calls ",e.jsx("code",{style:{background:"#f1f5f9",padding:"2px 6px",borderRadius:"4px",fontSize:"0.9em"},children:"requestUpdate()"})," to trigger re-renders (similar to Lit's ",e.jsx("code",{style:{background:"#f1f5f9",padding:"2px 6px",borderRadius:"4px",fontSize:"0.9em"},children:"this.host.requestUpdate()"}),")"]}),e.jsxs("li",{children:["No need to implement a special ",e.jsx("code",{style:{background:"#f1f5f9",padding:"2px 6px",borderRadius:"4px",fontSize:"0.9em"},children:"ReactiveController"})," interface — the base class already has access to all lifecycle events"]})]})]}),e.jsx(o,{id:"stencil-abstract",tabs:u})]}),`
`,e.jsxs("details",{className:"example-section",children:[e.jsx("summary",{className:"example-title",children:"Example 3: Stencil Direct State Management"}),e.jsxs("div",{style:{padding:"16px 20px 0",color:"#475569",fontSize:"0.95rem",lineHeight:"1.6"},children:[e.jsx("p",{style:{margin:"0 0 16px"},children:e.jsx(s.p,{children:"Shows Stencil's superior approach where:"})}),e.jsxs("ul",{style:{margin:"0 0 16px",paddingLeft:"24px"},children:[e.jsxs("li",{children:["The base class owns the ",e.jsx("code",{style:{background:"#f1f5f9",padding:"2px 6px",borderRadius:"4px",fontSize:"0.9em"},children:"@State"})," directly"]}),e.jsxs("li",{children:["No need for ",e.jsx("code",{style:{background:"#f1f5f9",padding:"2px 6px",borderRadius:"4px",fontSize:"0.9em"},children:"requestUpdate()"})," calls"]}),e.jsx("li",{children:"No controller instance needed"}),e.jsxs("li",{children:["No need to implement a special ",e.jsx("code",{style:{background:"#f1f5f9",padding:"2px 6px",borderRadius:"4px",fontSize:"0.9em"},children:"ReactiveController"})," interface — the base class already has access to all lifecycle events"]}),e.jsx("li",{children:"Just extend the base class and inherit everything"})]})]}),e.jsx(o,{id:"stencil-direct",tabs:x})]}),`
`,e.jsxs(s.p,{children:["For background on reactive controllers in Lit, see the official docs: ",e.jsx("a",{href:"https://lit.dev/docs/composition/controllers/",target:"_blank",rel:"noopener noreferrer",children:"lit.dev/docs/composition/controllers/"}),"."]})]})}function y(t={}){const{wrapper:s}={...a(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(l,{...t})}):l(t)}export{o as CodeTabset,y as default,h as example1Tabs,u as example2Tabs,x as example3Tabs};
