/**
 * FocusControllerMixin - mixin factory for focus management functionality
 * 
 * This mixin provides:
 * 1. Focus state management (isFocused, focusCount, blurCount)
 * 2. Focus tracking methods (handleFocus, handleBlur, etc.)
 * 3. Requires component to implement requestUpdate()
 */
import { State } from '@stencil/core';

export const FocusControllerMixin = (Base: any) => {
  class FocusMixin extends Base {
    @State() protected isFocused: boolean = false;
    @State() protected focusCount: number = 0;
    @State() protected blurCount: number = 0;
    
    // requestUpdate() must be implemented by the component extending FormFieldBase
    // This simulates Lit's this.host.requestUpdate()
    // Note: With Mixin, we can't use abstract, so we rely on FormFieldBase to enforce this
    
    // Lifecycle methods
    componentDidLoad() {
      super.componentDidLoad?.();
      this.setupFocusTracking();
    }
    
    disconnectedCallback() {
      super.disconnectedCallback?.();
      this.cleanupFocusTracking();
    }
    
    protected setupFocusTracking() {
      // Default implementation - can be extended
    }
    
    protected cleanupFocusTracking() {
      // Default implementation - can be extended
    }
    
    // Handle focus event
    handleFocus() {
      this.isFocused = true;
      this.focusCount++;
      this.requestUpdate();
    }
    
    // Handle blur event
    handleBlur() {
      this.isFocused = false;
      this.blurCount++;
      this.requestUpdate();
    }
    
    // Get focus state
    getFocusState() {
      return {
        isFocused: this.isFocused,
        focusCount: this.focusCount,
        blurCount: this.blurCount,
      };
    }
    
    // Reset focus tracking
    resetFocusTracking() {
      this.focusCount = 0;
      this.blurCount = 0;
      this.requestUpdate();
    }
  }
  
  return FocusMixin;
};

