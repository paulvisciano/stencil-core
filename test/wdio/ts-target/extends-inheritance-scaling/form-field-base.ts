/**
 * FormFieldBase - combines ValidationControllerMixin and FocusControllerMixin
 * 
 * This base class demonstrates how multiple controllers can be combined
 * via Mixin (multiple inheritance). Components can extend this to get both
 * validation and focus management functionality.
 */
import { Mixin } from '@stencil/core';
import { ValidationControllerMixin } from './validation-controller-mixin.js';
import { FocusControllerMixin } from './focus-controller-mixin.js';

export abstract class FormFieldBase extends Mixin(ValidationControllerMixin, FocusControllerMixin) {
  // requestUpdate() must be implemented by components extending this class
  // This provides a base implementation that components will override
  protected requestUpdate(): void {
    // Components must override this method
    // This default implementation ensures the mixins can call it
  }
  
  // Convenience methods that combine both controllers
  handleFocusEvent() {
    this.handleFocus(); // From FocusControllerMixin
  }
  
  handleBlurEvent(value: any) {
    this.handleBlur(); // From FocusControllerMixin (no params)
    this.validate(value); // From ValidationControllerMixin
  }
}

