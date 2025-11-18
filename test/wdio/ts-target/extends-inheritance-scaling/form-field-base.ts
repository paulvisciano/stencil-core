/**
 * FormFieldBase - combines ValidationControllerBase and FocusControllerBase
 * 
 * This base class demonstrates how multiple controllers can be combined
 * via inheritance. Components can extend this to get both validation
 * and focus management functionality.
 */
import { ValidationControllerBase } from './validation-controller-base.js';
import { FocusControllerBase } from './focus-controller-base.js';

export abstract class FormFieldBase extends ValidationControllerBase {
  protected focusController: FocusControllerBase;
  
  constructor() {
    super();
    // Create focus controller instance with reference to this for requestUpdate
    const self = this;
    this.focusController = new (class extends FocusControllerBase {
      protected requestUpdate(): void {
        self.requestUpdate();
      }
    })();
  }
  
  // Override requestUpdate to handle both controllers
  protected abstract requestUpdate(): void;
  
  // Lifecycle methods - call both controllers
  componentDidLoad() {
    super.componentDidLoad(); // ValidationControllerBase
    this.focusController.componentDidLoad();
  }
  
  disconnectedCallback() {
    super.disconnectedCallback(); // ValidationControllerBase
    this.focusController.disconnectedCallback();
  }
  
  // Expose focus controller methods
  handleFocusEvent() {
    this.focusController.handleFocus();
  }
  
  handleBlurEvent(value: any) {
    this.focusController.handleBlur();
    super.handleBlur(value); // Also validate on blur
  }
  
  getFocusState() {
    return this.focusController.getFocusState();
  }
  
  resetFocusTracking() {
    this.focusController.resetFocusTracking();
  }
}

