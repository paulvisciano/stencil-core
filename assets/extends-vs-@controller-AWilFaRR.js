import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-Dvya1EBe.js";import{M as s}from"./blocks-W4oZwreq.js";import"./iframe-CHPvc_4h.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CZ7lsOWu.js";function r(i){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Testing/Behavior/Extends/Extends vs @Controller"}),`
`,e.jsx(n.h1,{id:"why-extends-over-controller-decorator",children:"Why Extends Over @Controller Decorator"}),`
`,e.jsx(n.h2,{id:"technical-decision-summary",children:"Technical Decision Summary"}),`
`,e.jsx(n.p,{children:"The extends approach was chosen over a @Controller decorator based on technical merit and Stencil's architectural principles. This provides the foundation for Reactive Controllers without framework bloat, better performance, and maximum flexibility for implementation teams."}),`
`,e.jsx(n.h3,{id:"key-technical-reasons",children:"Key Technical Reasons:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"@Controller Would Be Technical Overkill"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Stencil decorators are for compile-time metadata (@Prop, @State, @Method)"}),`
`,e.jsx(n.li,{children:"Reactive Controllers are pure runtime behavior patterns"}),`
`,e.jsx(n.li,{children:"Adding a decorator would ship unnecessary code to users who don't need it"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Extends Leverages Existing Stencil Strengths"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Uses proven inheritance patterns already in Stencil"}),`
`,e.jsx(n.li,{children:"Automatic constructor handling with super() calls"}),`
`,e.jsx(n.li,{children:"Built-in lifecycle management"}),`
`,e.jsx(n.li,{children:"Promise awaiting handled under-the-hood"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Performance & Bundle Size"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Zero additional runtime overhead"}),`
`,e.jsx(n.li,{children:"No framework bloat for unused features"}),`
`,e.jsx(n.li,{children:"Smaller bundle sizes for production applications"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Developer Experience Benefits"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Just JavaScript - easy to understand and debug"}),`
`,e.jsx(n.li,{children:"No vendor lock-in to proprietary Stencil APIs"}),`
`,e.jsx(n.li,{children:"Full flexibility to implement exactly what teams need"}),`
`,e.jsx(n.li,{children:"Future-proof approach that won't break with framework updates"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"the-perfect-timing-discovery",children:"The Perfect Timing Discovery"}),`
`,e.jsxs(n.p,{children:["John Jenkins had recently implemented extends functionality for general inheritance patterns. When we discussed the functional requirements for Reactive Controllers, he immediately recognized that ",e.jsx(n.strong,{children:"the extends feature provides the necessary foundation for Reactive Controllers"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"John's Assessment"}),": ",e.jsx(n.em,{children:'"Stencil should get out of the way; let people write and run their own javascript. The extends functionality I built provides the foundation for Reactive Controllers - the testing will validate it works for real-world implementation scenarios."'})]}),`
`,e.jsx(n.h2,{id:"implementation-approach",children:"Implementation Approach"}),`
`,e.jsx(n.p,{children:"The extends approach provides a clean, lightweight solution that aligns perfectly with Stencil's architectural philosophy:"}),`
`,e.jsx(n.h3,{id:"what-this-means-in-practice",children:e.jsx(n.strong,{children:"What This Means in Practice"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Reactive Controller Base Class:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`export class ValidationController {
  constructor() {
    this.errors = [];
  }
  
  componentDidLoad() {
    this.setupValidation();
  }
  
  validateField(value) {
    // Validation logic here
    return this.errors;
  }
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Component Implementation:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`@Component({
  tag: 'my-form-field'
})
export class MyFormField extends ValidationController {
  @State() fieldValue: string = '';
  
  render() {
    const errors = this.validateField(this.fieldValue);
    return (
      <div>
        <input 
          value={this.fieldValue}
          onInput={(e) => this.fieldValue = e.target.value}
        />
        {errors.map(error => <span class="error">{error}</span>)}
      </div>
    );
  }
}
`})}),`
`,e.jsx(n.h3,{id:"key-benefits-realized",children:e.jsx(n.strong,{children:"Key Benefits Realized"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Simplicity"}),": Just JavaScript inheritance - no new APIs to learn"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Performance"}),": Zero framework overhead, optimal bundle sizes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Flexibility"}),": Teams can implement exactly what they need"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Maintainability"}),": Standard patterns that any developer can understand"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Future-Proof"}),": Won't break with framework updates"]}),`
`]}),`
`,e.jsx(n.h2,{id:"validation--testing",children:"Validation & Testing"}),`
`,e.jsx(n.p,{children:"Our systematic testing approach validates this decision through real-world scenarios:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Foundation Solid"}),": Core extends functionality proven through existing test cases"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Comprehensive Coverage"}),": Testing patterns from Lit's reactive controllers and real implementation requirements"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Browser Validation"}),": WebDriverIO testing ensures cross-browser compatibility"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Progressive Enhancement"}),": 3 of 11 planned test scenarios complete with 18+ passing tests"]}),`
`]}),`
`,e.jsxs(n.p,{children:["For detailed testing progress, implementation status, and comprehensive test case coverage, see: ",e.jsx(n.a,{href:"?path=/docs/testing-behavior-extends-overview--docs",children:"Extends Functionality Testing Overview"})]}),`
`,e.jsx(n.h2,{id:"conclusion",children:"Conclusion"}),`
`,e.jsxs(n.p,{children:["The extends approach represents the best of both worlds: ",e.jsx(n.strong,{children:"powerful composition patterns"})," without ",e.jsx(n.strong,{children:"framework complexity"}),". By leveraging existing Stencil capabilities rather than adding new decorators, we provide teams with a solution that's performant, flexible, and maintainable."]}),`
`,e.jsxs(n.p,{children:["This decision exemplifies Stencil's core philosophy: ",e.jsx(n.em,{children:'"Get out of the way; let people write and run their own JavaScript."'})," The result is reactive controllers that feel natural to implement and debug, while providing all the code reuse and standardization benefits teams need."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"This technical decision was validated through collaboration with John Jenkins (extends functionality implementer) on functional requirements and comprehensive testing of real-world usage patterns."})})]})}function p(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{p as default};
