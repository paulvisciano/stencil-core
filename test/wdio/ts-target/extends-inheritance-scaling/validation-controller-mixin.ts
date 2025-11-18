/**
 * ValidationControllerMixin - mixin factory for validation functionality
 * 
 * This mixin provides:
 * 1. Validation state management (isValid, errorMessage)
 * 2. Validation methods (validate, handleBlur, etc.)
 * 3. Requires component to implement requestUpdate()
 */
import { State } from '@stencil/core';

export const ValidationControllerMixin = (Base: any) => {
  class ValidationMixin extends Base {
    @State() protected isValid: boolean = true;
    @State() protected errorMessage: string = '';
    protected validationCallback?: (value: any) => string | undefined;
    
    // requestUpdate() must be implemented by the component extending FormFieldBase
    // This simulates Lit's this.host.requestUpdate()
    // Note: With Mixin, we can't use abstract, so we rely on FormFieldBase to enforce this
    
    // Lifecycle methods
    componentDidLoad() {
      super.componentDidLoad?.();
      this.setupValidation();
    }
    
    disconnectedCallback() {
      super.disconnectedCallback?.();
      this.cleanupValidation();
    }
    
    protected setupValidation() {
      // Default implementation - can be extended
    }
    
    protected cleanupValidation() {
      // Default implementation - can be extended
    }
    
    // Set the validation callback from host
    setValidationCallback(callback: (value: any) => string | undefined) {
      this.validationCallback = callback;
    }
    
    // Validate the value - returns true if valid, false otherwise
    validate(value: any): boolean {
      if (!this.validationCallback) {
        this.isValid = true;
        this.errorMessage = '';
        this.requestUpdate();
        return true;
      }
      
      const error = this.validationCallback(value);
      this.isValid = !error;
      this.errorMessage = error || '';
      this.requestUpdate();
      return this.isValid;
    }
    
    // Get validation state
    getValidationState() {
      return {
        isValid: this.isValid,
        errorMessage: this.errorMessage,
      };
    }
    
    // Get validation message data for rendering
    getValidationMessageData(helperTextId?: string, errorTextId?: string) {
      const { isValid, errorMessage } = this.getValidationState();
      
      return {
        isValid,
        errorMessage,
        helperTextId,
        errorTextId,
        hasError: !!errorMessage,
      };
    }
    
    // Reset validation state
    resetValidation() {
      this.isValid = true;
      this.errorMessage = '';
      this.requestUpdate();
    }
  }
  
  return ValidationMixin;
};

