import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-C9JfSZFR.js";import{M as o}from"./blocks-D-NAOpI1.js";import"./iframe-sQV3dP9n.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BgekLC3r.js";function l(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Testing/Behavior/Extends/Composition vs Inheritance"}),`
`,n.jsx(e.h1,{id:"composition-vs-inheritance",children:"Composition vs Inheritance"}),`
`,n.jsx(e.h2,{id:"introduction",children:"Introduction"}),`
`,n.jsxs(e.p,{children:["Starting with ",n.jsx(e.strong,{children:"Stencil v4.37.0"})," (via ",n.jsx(e.a,{href:"https://github.com/stenciljs/core/pull/6362",rel:"nofollow",children:"PR #6362"}),"), Stencil components gained support for class inheritance (",n.jsx(e.code,{children:"extends"}),") and mixin composition (",n.jsx(e.code,{children:"Mixin()"}),"). Mixins allow for multiple inheritance, enabling components to inherit from multiple base classes simultaneously. This foundational capability enables a powerful architectural pattern: ",n.jsx(e.strong,{children:"moving logic out of components into reusable helper classes, commonly called controllers"}),"."]}),`
`,n.jsx(e.p,{children:"Controllers are separate classes that house behavior and can be shared across many components. They can be integrated into components using three primary approaches:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Single Inheritance"}),": Using ",n.jsx(e.code,{children:"extends"})," to inherit from a single controller base class (when you only need one controller)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Multiple Inheritance (Mixins)"}),": Using Stencil's ",n.jsx(e.code,{children:"Mixin()"})," function to compose multiple controller behaviors into a single base class via multiple inheritance (when you need multiple controllers)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Composition"}),": Using controller instances within components that extend a stable base class like ",n.jsx(e.code,{children:"ReactiveControllerHost"})]}),`
`]}),`
`,n.jsx(e.p,{children:"This pattern provides several key benefits:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Separation of concerns"}),": Business logic lives in controllers, not components"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reusability"}),": Controllers can be shared across multiple components"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Testability"}),": Controllers can be tested independently of components"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Maintainability"}),": Changes to behavior are centralized in controller classes"]}),`
`]}),`
`,n.jsx(e.p,{children:"This document compares inheritance-based and composition-based patterns at scale, examining how each approach performs when building a component library with many components and controllers. We analyze two test cases that demonstrate the trade-offs and scaling characteristics of each pattern."}),`
`,n.jsx(e.h2,{id:"test-cases",children:"Test Cases"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Test Case #18"}),": Inheritance-Based Scaling - 3 components, 2 controllers via inheritance"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Test Case #19"}),": Composition-Based Scaling - 3 components, 2 controllers via composition"]}),`
`]}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:"Both patterns achieve the same functional goal: providing validation and focus management to form components. More importantly, both patterns achieve the original goal of moving logic out of components into separate, reusable controller classes. However, they differ significantly in their architecture, API surface, and how they scale."}),`
`,n.jsx(e.h3,{id:"inheritance-pattern-via-mixin",children:"Inheritance Pattern (via Mixin)"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Location"}),": ",n.jsx(e.code,{children:"test/wdio/ts-target/extends-inheritance-scaling/"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Architecture"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`CheckboxGroupCmp
  └─ extends FormFieldBase (optional convenience layer)
       └─ extends Mixin(ValidationControllerMixin, FocusControllerMixin)
            └─ ValidationControllerMixin (manages validation state)
            └─ FocusControllerMixin (manages focus state)
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Alternative (Direct Mixin Usage)"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`CheckboxGroupCmp
  └─ extends Mixin(ValidationControllerMixin, FocusControllerMixin)
       └─ (bypasses FormFieldBase entirely)
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Key Characteristics"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Uses Stencil's ",n.jsx(e.code,{children:"Mixin()"})," function for multiple inheritance"]}),`
`,n.jsx(e.li,{children:"Controllers are implemented as mixin factories that return classes"}),`
`,n.jsx(e.li,{children:"All public/protected methods from mixins are accessible"}),`
`,n.jsx(e.li,{children:"Lifecycle methods are automatically merged from all mixins"}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"FormFieldBase"})," is optional - components can use mixins directly"]}),`
`]}),`
`,n.jsx(e.h3,{id:"composition-pattern",children:"Composition Pattern"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Location"}),": ",n.jsx(e.code,{children:"test/wdio/ts-target/extends-composition-scaling/"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Architecture"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`CheckboxGroupCmp
  └─ extends ReactiveControllerHost
       └─ composes ValidationController (as instance)
       └─ composes FocusController (as instance)
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Key Characteristics"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Components extend ",n.jsx(e.code,{children:"ReactiveControllerHost"})," - a stable base class that doesn't change over time"]}),`
`,n.jsx(e.li,{children:"The inheritance chain is always just one level (component → ReactiveControllerHost), it never grows"}),`
`,n.jsx(e.li,{children:"All functionality is added through composition (adding controller instances), not inheritance"}),`
`,n.jsx(e.li,{children:"Only explicitly exposed methods are accessible"}),`
`,n.jsx(e.li,{children:"Lifecycle methods are automatically called via ReactiveControllerHost"}),`
`,n.jsx(e.li,{children:"Controllers are loosely coupled through composition"}),`
`]}),`
`,n.jsx(e.h2,{id:"key-differences",children:"Key Differences"}),`
`,n.jsx(e.h3,{id:"1-method-visibility-and-api-surface",children:"1. Method Visibility and API Surface"}),`
`,n.jsx(e.h4,{id:"inheritance-pattern-via-mixin-1",children:"Inheritance Pattern (via Mixin)"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Characteristic"}),": All methods from all mixins are accessible in the component."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// In ValidationControllerMixin (public methods)
setValidationCallback()
validate()
getValidationState()
getValidationMessageData()
resetValidation()

// In FocusControllerMixin (public methods)
handleFocus()
handleBlur()
getFocusState()
resetFocusTracking()

// In FormFieldBase (optional convenience methods)
handleFocusEvent()  // Wrapper for handleFocus()
handleBlurEvent()   // Wrapper that calls handleBlur() + validate()

// All accessible in CheckboxGroupCmp!
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Impact"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ Easy access to all functionality"}),`
`,n.jsxs(e.li,{children:["✅ Clean multiple inheritance via ",n.jsx(e.code,{children:"Mixin()"})]}),`
`,n.jsx(e.li,{children:"❌ Large API surface that grows with mixin changes"}),`
`,n.jsx(e.li,{children:"❌ Potential for accidental coupling"}),`
`,n.jsx(e.li,{children:"❌ Harder to control what's exposed"}),`
`]}),`
`,n.jsx(e.h4,{id:"composition-pattern-1",children:"Composition Pattern"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Solution"}),": Only explicitly exposed methods are accessible."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// Controllers are private instances
private validationController: ValidationController;
private focusController: FocusController;

// Controllers use forceUpdate() directly
// In ValidationController:
forceUpdate(this.host); // Direct call, no requestUpdate() method needed

// Only methods you explicitly expose are public
getValidationState() {
  return this.validationController.getValidationState();
}
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Impact"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ Controlled API surface"}),`
`,n.jsx(e.li,{children:"✅ Explicit interface design"}),`
`,n.jsx(e.li,{children:"✅ Base class changes don't automatically leak"}),`
`,n.jsx(e.li,{children:"❌ More boilerplate to expose methods"}),`
`]}),`
`,n.jsx(e.h3,{id:"2-inheritance-chain-depth",children:"2. Inheritance Chain Depth"}),`
`,n.jsx(e.h4,{id:"inheritance-pattern-via-mixin-2",children:"Inheritance Pattern (via Mixin)"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Characteristic"}),": When multiple mixins are combined via ",n.jsx(e.code,{children:"Mixin()"}),", they all share the same API on the component."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`CheckboxGroupCmp
  └─ extends FormFieldBase
       └─ extends Mixin(ValidationControllerMixin, FocusControllerMixin)
            └─ ValidationControllerMixin (all methods leak to component)
            └─ FocusControllerMixin (all methods leak to component)
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Impact"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"❌ When you combine multiple mixins, all their methods become part of the component's API"}),`
`,n.jsx(e.li,{children:"❌ If using a shared base class that combines many mixins, all components extending that base inherit all mixin methods (even if not needed)"}),`
`,n.jsx(e.li,{children:"❌ You can use mixins directly per component, but this adds complexity to component definitions"}),`
`,n.jsx(e.li,{children:"❌ Method resolution becomes more complex when multiple mixins are combined"}),`
`,n.jsx(e.li,{children:"❌ Harder to reason about which methods come from which mixin"}),`
`]}),`
`,n.jsx(e.h4,{id:"composition-pattern-2",children:"Composition Pattern"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Characteristic"}),": Inheritance chain stays flat - always just one level."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`CheckboxGroupCmp
  └─ extends ReactiveControllerHost (stable, never changes)
       └─ composes ValidationController (instance)
       └─ composes FocusController (instance)
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Impact"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ Inheritance chain is always one level (component → ReactiveControllerHost)"}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.code,{children:"ReactiveControllerHost"})," is a stable base API that doesn't change over time"]}),`
`,n.jsx(e.li,{children:"✅ All functionality is added through composition (adding controller instances)"}),`
`,n.jsx(e.li,{children:"✅ No inheritance chain depth concerns regardless of how many controllers you add"}),`
`,n.jsx(e.li,{children:"✅ Method resolution is always straightforward"}),`
`]}),`
`,n.jsx(e.h3,{id:"3-lifecycle-management",children:"3. Lifecycle Management"}),`
`,n.jsx(e.h4,{id:"inheritance-pattern-via-mixin-3",children:"Inheritance Pattern (via Mixin)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// Each mixin defines its own lifecycle methods
// Stencil's Mixin() automatically merges them

// In ValidationControllerMixin:
componentDidLoad() {
  super.componentDidLoad?.(); // Calls previous mixin/base
  this.setupValidation();
}

// In FocusControllerMixin:
componentDidLoad() {
  super.componentDidLoad?.(); // Calls ValidationControllerMixin's componentDidLoad
  this.setupFocusTracking();
}

// Components can optionally override (but must call super() if they do)
componentDidLoad() {
  super.componentDidLoad(); // Required! Calls all mixin lifecycle methods
  // Component-specific logic here
}
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Characteristics"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Automatic lifecycle merging via ",n.jsx(e.code,{children:"Mixin()"})]}),`
`,n.jsx(e.li,{children:"Each mixin's lifecycle methods are called in mixin order"}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Components must call ",n.jsx(e.code,{children:"super()"})," if they override lifecycle methods"]})," - this is standard JavaScript inheritance pattern"]}),`
`,n.jsxs(e.li,{children:["Same ",n.jsx(e.code,{children:"super()"})," requirement as composition approach - both patterns follow normal class inheritance rules"]}),`
`,n.jsx(e.li,{children:"No need to manually chain controller lifecycle methods"}),`
`]}),`
`,n.jsx(e.h4,{id:"composition-pattern-3",children:"Composition Pattern"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ReactiveControllerHost automatically calls lifecycle methods
// Components must call super() to trigger controller lifecycle hooks

// In ReactiveControllerHost:
componentDidLoad() {
  this.controllers.forEach(controller => {
    if (controller.hostDidLoad) {
      controller.hostDidLoad();
    }
  });
}

// In component (must call super):
componentDidLoad() {
  super.componentDidLoad(); // Required! Triggers controller lifecycle hooks
  // Component-specific logic here
}
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Characteristics"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Automatic lifecycle management for controllers"}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Components must call ",n.jsx(e.code,{children:"super()"})," in lifecycle methods"]})," - this is standard JavaScript inheritance pattern"]}),`
`,n.jsxs(e.li,{children:["Same ",n.jsx(e.code,{children:"super()"})," requirement as mixin approach - both patterns follow normal class inheritance rules"]}),`
`,n.jsx(e.li,{children:"No need to manually call individual controller lifecycle methods"}),`
`,n.jsxs(e.li,{children:["Adding new controllers automatically gets lifecycle hooks (as long as ",n.jsx(e.code,{children:"super()"})," is called)"]}),`
`]}),`
`,n.jsx(e.h3,{id:"4-adding-new-controllers",children:"4. Adding New Controllers"}),`
`,n.jsx(e.h4,{id:"inheritance-pattern-via-mixin-4",children:"Inheritance Pattern (via Mixin)"}),`
`,n.jsxs(e.p,{children:[n.jsxs(e.strong,{children:["Adding a third controller (e.g., ",n.jsx(e.code,{children:"AccessibilityControllerMixin"}),")"]}),":"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Option 1: Update FormFieldBase (all components get it)"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Create ",n.jsx(e.code,{children:"AccessibilityControllerMixin"})," factory"]}),`
`,n.jsxs(e.li,{children:["Update ",n.jsx(e.code,{children:"FormFieldBase"}),":",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`export class FormFieldBase extends Mixin(
  ValidationControllerMixin, 
  FocusControllerMixin,
  AccessibilityControllerMixin  // Add here
) { ... }
`})}),`
`]}),`
`,n.jsxs(e.li,{children:["All components extending ",n.jsx(e.code,{children:"FormFieldBase"})," automatically get it"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Option 2: Use mixins directly (component-specific)"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Create ",n.jsx(e.code,{children:"AccessibilityControllerMixin"})," factory"]}),`
`,n.jsxs(e.li,{children:["Component uses mixins directly:",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`export class MyComponent extends Mixin(
  ValidationControllerMixin,
  AccessibilityControllerMixin  // Only this component gets it
) { ... }
`})}),`
`]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Scaling Characteristics"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["✅ Clean multiple inheritance via ",n.jsx(e.code,{children:"Mixin()"})]}),`
`,n.jsx(e.li,{children:"✅ Can mix and match controllers per component (if using mixins directly)"}),`
`,n.jsxs(e.li,{children:["❌ If using ",n.jsx(e.code,{children:"FormFieldBase"}),", all components get all controllers"]}),`
`,n.jsx(e.li,{children:"✅ Lifecycle methods automatically merged - no manual chaining needed"}),`
`]}),`
`,n.jsx(e.h4,{id:"composition-pattern-4",children:"Composition Pattern"}),`
`,n.jsxs(e.p,{children:[n.jsxs(e.strong,{children:["Adding a third controller (e.g., ",n.jsx(e.code,{children:"AccessibilityController"}),")"]}),":"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Create ",n.jsx(e.code,{children:"AccessibilityController"})," class"]}),`
`,n.jsxs(e.li,{children:["Add it to the component that needs it:",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`private accessibilityController = new AccessibilityController(this);
`})}),`
`]}),`
`,n.jsxs(e.li,{children:["Register it in constructor:",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`this.addController(this.accessibilityController);
`})}),`
`]}),`
`,n.jsx(e.li,{children:"Done! Lifecycle is automatic."}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Scaling Benefits"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Each component only includes controllers it needs"}),`
`,n.jsx(e.li,{children:"Easy to mix and match controllers"}),`
`,n.jsx(e.li,{children:"No base class modifications needed"}),`
`,n.jsx(e.li,{children:"Controllers are independent and composable"}),`
`]}),`
`,n.jsx(e.h2,{id:"scaling-comparison",children:"Scaling Comparison"}),`
`,n.jsx(e.p,{children:"The number of controllers typically scales with the number of components. You don't start needing many controllers until you have many components. Here's how each pattern performs at different scales:"}),`
`,n.jsx(e.h3,{id:"small-component-library-5-10-components-2-3-controllers",children:"Small Component Library (5-10 components, 2-3 controllers)"}),`
`,n.jsx(e.p,{children:"Both patterns work well at this scale. The differences are subtle but important:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Inheritance"}),": Simpler setup, all methods directly accessible. Base classes with 2-3 mixins are manageable, or you can use mixins directly."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Composition"}),": More explicit, better encapsulation. Slightly more boilerplate but still reasonable."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Recommendation"}),": Either pattern works. Choose based on team preference and future growth plans."]}),`
`,n.jsx(e.h3,{id:"mid-size-component-library-30-components-4-6-controllers",children:"Mid-Size Component Library (30 components, 4-6 controllers)"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Inheritance Pattern (via Mixin) Challenges"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Base classes with 4-6 mixins become harder to manage (though you can create multiple base classes or use mixins directly)"}),`
`,n.jsx(e.li,{children:"Components extending a base class inherit all mixins from that base (even if unused)"}),`
`,n.jsx(e.li,{children:"Using mixins directly provides flexibility but adds complexity to component definitions"}),`
`,n.jsx(e.li,{children:"Mixin merging makes debugging harder (methods from multiple sources)"}),`
`,n.jsx(e.li,{children:"Harder to test individual mixins in isolation"}),`
`,n.jsx(e.li,{children:"API surface grows significantly with each mixin"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Composition Pattern Advantages"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Each component only includes needed controllers"}),`
`,n.jsx(e.li,{children:"Controllers remain independent and testable"}),`
`,n.jsx(e.li,{children:"Easy to create component-specific controller combinations"}),`
`,n.jsx(e.li,{children:"No base class bloat"}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Stable inheritance chain"})," - always just ",n.jsx(e.code,{children:"extends ReactiveControllerHost"}),", never grows"]}),`
`,n.jsx(e.li,{children:"Controlled API surface regardless of controller count"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Recommendation"}),": Composition pattern starts to show clear advantages at this scale."]}),`
`,n.jsx(e.h3,{id:"large-component-library-50-components-8-controllers",children:"Large Component Library (50+ components, 8+ controllers)"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Inheritance Pattern (via Mixin) Challenges"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Base classes with 8+ mixins become unwieldy (you can create multiple base classes, but this fragments the inheritance structure)"}),`
`,n.jsx(e.li,{children:"Deep inheritance chains make method resolution harder to reason about"}),`
`,n.jsx(e.li,{children:"Components inheriting from a base class get all mixins from that base, creating unnecessary bloat"}),`
`,n.jsx(e.li,{children:"Debugging becomes significantly more complex"}),`
`,n.jsx(e.li,{children:"Testing mixins in isolation is very difficult"}),`
`,n.jsx(e.li,{children:"API surface explosion - every mixin method leaks onto every component"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Composition Pattern Advantages"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Scales gracefully - no inheritance chain depth concerns"}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Inheritance chain stays flat"})," - always ",n.jsx(e.code,{children:"extends ReactiveControllerHost"})," (stable base API)"]}),`
`,n.jsx(e.li,{children:"Each component only includes controllers it actually needs"}),`
`,n.jsx(e.li,{children:"Controllers remain independent and easily testable"}),`
`,n.jsx(e.li,{children:"Clear separation makes debugging straightforward"}),`
`,n.jsx(e.li,{children:"Easy to add/remove controllers without affecting others"}),`
`,n.jsx(e.li,{children:"Controlled API surface prevents accidental coupling"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Recommendation"}),": Composition pattern is strongly recommended for large component libraries."]}),`
`,n.jsx(e.h2,{id:"when-to-use-each-pattern",children:"When to Use Each Pattern"}),`
`,n.jsx(e.h3,{id:"use-inheritance-mixin-when",children:"Use Inheritance (Mixin) When:"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Project Characteristics:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ You have a small, fixed set of controllers (2-4 controllers)"}),`
`,n.jsx(e.li,{children:"✅ All or most components need the same controllers"}),`
`,n.jsx(e.li,{children:"✅ You want the simplest possible API with direct method access"}),`
`,n.jsx(e.li,{children:"✅ You're building a cohesive component family with shared functionality"}),`
`,n.jsx(e.li,{children:"✅ You prioritize developer convenience over API control"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Technical Requirements:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ You want minimal boilerplate in components"}),`
`,n.jsxs(e.li,{children:["✅ Direct method access (",n.jsx(e.code,{children:"this.validate()"}),") is preferred over delegation"]}),`
`,n.jsx(e.li,{children:"✅ You're comfortable with mixin methods being part of component's public API"}),`
`,n.jsx(e.li,{children:"✅ You want automatic lifecycle merging without manual setup"}),`
`,n.jsx(e.li,{children:"✅ You need TypeScript-friendly multiple inheritance"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Avoid Inheritance When:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"❌ You need strict API control and encapsulation"}),`
`,n.jsx(e.li,{children:"❌ Components need significantly different controller combinations"}),`
`,n.jsx(e.li,{children:"❌ You have many controllers (5+) that would bloat the base class"}),`
`,n.jsx(e.li,{children:"❌ You need to test controllers in isolation frequently"}),`
`,n.jsx(e.li,{children:"❌ You want to hide internal implementation details"}),`
`]}),`
`,n.jsx(e.h3,{id:"use-composition-when",children:"Use Composition When:"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Project Characteristics:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ You have many controllers (4+ controllers)"}),`
`,n.jsx(e.li,{children:"✅ Components need different controller combinations"}),`
`,n.jsx(e.li,{children:"✅ You want explicit API control and encapsulation"}),`
`,n.jsx(e.li,{children:"✅ You're building a flexible component library"}),`
`,n.jsx(e.li,{children:"✅ You prioritize maintainability and testability"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Technical Requirements:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ You need strict control over component's public API"}),`
`,n.jsx(e.li,{children:"✅ You want to hide internal controller implementation details"}),`
`,n.jsx(e.li,{children:"✅ You need to easily test controllers in isolation"}),`
`,n.jsx(e.li,{children:"✅ You want loose coupling between controllers"}),`
`,n.jsx(e.li,{children:"✅ You need per-component controller selection"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Avoid Composition When:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"❌ You have a very small, fixed set of controllers (1-2 controllers)"}),`
`,n.jsx(e.li,{children:"❌ All components need exactly the same controllers"}),`
`,n.jsx(e.li,{children:"❌ You want the absolute minimum boilerplate"}),`
`,n.jsx(e.li,{children:"❌ Direct method access is more important than encapsulation"}),`
`,n.jsx(e.li,{children:"❌ The additional abstraction layer provides no benefit"}),`
`]}),`
`,n.jsx(e.h2,{id:"code-examples",children:"Code Examples"}),`
`,n.jsx(e.h3,{id:"inheritance-pattern-via-mixin---component",children:"Inheritance Pattern (via Mixin) - Component"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Using FormFieldBase (convenience layer)"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`@Component({ tag: 'inheritance-checkbox-group' })
export class CheckboxGroupCmp extends FormFieldBase {
  // All mixin methods available via FormFieldBase
  // Lifecycle methods automatically merged from mixins
  
  // If overriding lifecycle methods, must call super()
  componentDidLoad() {
    super.componentDidLoad(); // Required! Calls all mixin lifecycle methods
    // Component-specific logic here
  }
  
  private onFocus = () => {
    this.handleFocusEvent(); // Convenience method from FormFieldBase
  };
  
  private onBlur = () => {
    this.handleBlurEvent(this.values); // Convenience method from FormFieldBase
  };
}
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Using Mixins Directly"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`@Component({ tag: 'inheritance-checkbox-group' })
export class CheckboxGroupCmp extends Mixin(
  ValidationControllerMixin, 
  FocusControllerMixin
) {
  // All mixin methods directly available
  
  // If overriding lifecycle methods, must call super()
  componentDidLoad() {
    super.componentDidLoad(); // Required! Calls all mixin lifecycle methods
    // Component-specific logic here
  }
  
  private onFocus = () => {
    this.handleFocus(); // Direct from FocusControllerMixin
  };
  
  private onBlur = () => {
    this.handleBlur(); // Direct from FocusControllerMixin
    this.validate(this.values); // Direct from ValidationControllerMixin
  };
}
`})}),`
`,n.jsx(e.h3,{id:"composition-pattern---component",children:"Composition Pattern - Component"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`@Component({ tag: 'composition-checkbox-group' })
export class CheckboxGroupCmp extends ReactiveControllerHost {
  private validationController = new ValidationController(this);
  private focusController = new FocusController(this);
  
  constructor() {
    super(); // Required! Standard JavaScript inheritance pattern
    this.addController(this.validationController);
    this.addController(this.focusController);
  }
  
  // If overriding lifecycle methods, must call super()
  componentDidLoad() {
    super.componentDidLoad(); // Required! Triggers controller lifecycle hooks
    // Component-specific logic here
  }
  
  // Only explicitly exposed methods are public
  private onFocus = () => {
    this.focusController.handleFocus();
  };
  
  private onBlur = () => {
    this.focusController.handleBlur();
    this.validationController.handleBlur(this.values);
  };
}
`})})]})}function x(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(l,{...i})}):l(i)}export{x as default};
