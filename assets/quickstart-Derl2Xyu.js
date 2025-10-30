import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-CH0APm6g.js";import{M as t}from"./blocks-CZZPPcD0.js";import"./iframe-ClBj42JF.js";import"./preload-helper-D9Z9MdNV.js";import"./index-l35Taa7Y.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Testing/Framework/Quickstart",tags:["dev-only","ai","coverage","stable"]}),`
`,e.jsx(n.h1,{id:"quickstart-the-3-step-testing-loop",children:"Quickstart: The 3-Step Testing Loop"}),`
`,e.jsx(n.p,{children:"The systematic workflow that maintains comprehensive coverage as Stencil.js evolves. This replaces ad-hoc testing with a repeatable, community-driven process."}),`
`,e.jsx(n.h2,{id:"source-of-truth",children:"Source of truth"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Rules JSON (per decorator): e.g., ",e.jsx(n.code,{children:"Testing/Decorators/Component/rules.json"})]}),`
`,e.jsxs(n.li,{children:["Coverage output (per decorator): e.g., ",e.jsx(n.code,{children:"Testing/Decorators/Component/coverage-data.json"})]}),`
`,e.jsxs(n.li,{children:["Generated artifacts (per decorator): e.g., ",e.jsx(n.code,{children:"test/wdio/component-decorator/matrix/{shadow,scoped,light}/"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"step-1-rules-discovery-",children:"Step 1: Rules Discovery 🔍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Purpose"}),": Discover valid decorator permutations through systematic compiler feedback"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"The Discovery Process"}),":"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"1. AI Matrix Generation"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# AI generates comprehensive matrix of ALL possible permutations
# Example: @Prop with type, reflect, mutable, attribute options
# Results in potentially 100+ initial permutations (many invalid)
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"2. Broad Component Generation"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Generate components for ALL permutations (including invalid ones)
npm run prop:generate-components
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"3. Compiler-Driven Rules Discovery"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Attempt to build - compiler errors reveal constraint violations
npm run components-build
# Example errors: "reflect and mutable cannot both be true for complex types"
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"4. Rules Encoding"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "constraints": {
    "mutuallyExclusive": [
      ["reflect: true", "type: Object"],
      ["reflect: true", "type: Array"]
    ]
  },
  "emit": {
    "naming": {
      "prefix": "prop",
      "includeOptions": ["type", "reflect", "mutable"]
    }
  }
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"5. Matrix Refinement"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Updated rules.json automatically refines matrix
# Invalid permutations eliminated, valid ones remain
# Regenerate components from refined matrix
npm run prop:generate-components
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Key Insight"}),": The compiler itself becomes the source of truth for valid decorator combinations!"]}),`
`,e.jsx(n.h2,{id:"step-2-generate--build-️",children:"Step 2: Generate & Build 🏗️"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Final Component Generation"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Generate components from refined, validated matrix
# Only valid permutations remain after Rules Discovery
cd /test/storybook/docs/.ai/testing
npm run prop:generate-components
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Clean Build Verification"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Should build successfully with no compiler errors
npm run components-build
# Result: All generated components compile cleanly
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"What This Step Accomplishes"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Generates ",e.jsx(n.strong,{children:"only valid"})," components based on discovered rules"]}),`
`,e.jsxs(n.li,{children:["Achieves ",e.jsx(n.strong,{children:"clean compilation"})," with zero errors"]}),`
`,e.jsxs(n.li,{children:["Creates ",e.jsx(n.strong,{children:"systematic coverage"})," of all valid decorator permutations"]}),`
`,e.jsxs(n.li,{children:["Produces ",e.jsx(n.strong,{children:"production-ready"})," test components"]}),`
`]}),`
`,e.jsx(n.h2,{id:"step-3-test--verify-",children:"Step 3: Test & Verify ✅"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Execute Tests"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Run comprehensive test suite
npm run tests

# Verify coverage updates
npm run prop:test-coverage
npm run state:test-coverage
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"What This Step Validates"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Runtime functionality in browser environment"}),`
`,e.jsx(n.li,{children:"All decorator behaviors and permutations"}),`
`,e.jsx(n.li,{children:"WebDriver I/O test execution"}),`
`,e.jsx(n.li,{children:"Coverage documentation updates"}),`
`]}),`
`,e.jsx(n.h2,{id:"complete-loop-example---prop-decorator",children:"Complete Loop Example - @Prop Decorator"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Step 1 - Rules Discovery"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"AI generated initial matrix: 6 types × 2 reflect × 2 mutable = 24 permutations"}),`
`,e.jsx(n.li,{children:"Generated all 24 components, attempted build"}),`
`,e.jsx(n.li,{children:"Compiler revealed: Complex types (Array, Object, Set) cannot use reflect=true"}),`
`,e.jsx(n.li,{children:"Created rules.json encoding this constraint"}),`
`,e.jsx(n.li,{children:"Refined matrix eliminated invalid combinations"}),`
`,e.jsx(n.li,{children:"Final valid matrix: 24 permutations (but different combinations)"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Step 2 - Generate & Build"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Generated 24 valid components from refined matrix"}),`
`,e.jsx(n.li,{children:"Clean build with zero compiler errors"}),`
`,e.jsx(n.li,{children:"All components follow systematic naming conventions"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Step 3 - Test & Verify"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Achieved 100% test coverage with 5 structured test cases"}),`
`,e.jsx(n.li,{children:"All 24 permutations tested across different behavioral scenarios"}),`
`,e.jsx(n.li,{children:"Coverage documentation automatically generated"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Result"}),": Comprehensive @Prop testing with ",e.jsx(n.strong,{children:"compiler-validated"})," permutations, ready for community contributions"]}),`
`,e.jsx(n.h2,{id:"community-contribution-integration",children:"Community Contribution Integration"}),`
`,e.jsx(n.h3,{id:"how-to-contribute",children:"How to Contribute"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"1. Identify Gaps"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Review coverage reports: ",e.jsx(n.code,{children:"/test/storybook/docs/Testing/Decorators/{decorator}/data/test-coverage.json"})]}),`
`,e.jsxs(n.li,{children:["Look for ",e.jsx(n.code,{children:'"tested": false'})," entries"]}),`
`,e.jsx(n.li,{children:"Check coverage percentages < 100%"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"2. Follow the Loop"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Step 1"}),": Update rules if adding new scenarios"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Step 2"}),": Generate/build components following established patterns"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Step 3"}),": Test and verify functionality"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"3. Implementation Patterns"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Example: New @Prop component following conventions
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'prop-string-reflect-mutable',
  shadow: true,
})
export class PropStringReflectMutable {
  @Prop({ reflect: true, mutable: true }) val!: string;

  render() {
    const v = this.val ?? 'init';
    return (
      <div>
        <p>Type: string | reflect: true | mutable: true</p>
        <p>Value: {v}</p>
      </div>
    );
  }
}
`})}),`
`,e.jsx(n.h3,{id:"quality-guardrails",children:"Quality Guardrails"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"100% compile coverage"})," required per decorator"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"File parity"}),": ",e.jsx(n.code,{children:".tsx"})," count matches ",e.jsx(n.code,{children:"coverage-data.json.coverage.covered"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Naming conventions"}),": Follow established patterns"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Test case mapping"}),": Document which scenarios are covered"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Browser compatibility"}),": Verify cross-browser functionality"]}),`
`]}),`
`,e.jsx(n.h3,{id:"ai-assisted-contributions",children:"AI-Assisted Contributions"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Model-agnostic"}),": Works with any AI (proprietary or open-source)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Pattern-following"}),": Use existing components as templates"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Systematic verification"}),": 3-step loop ensures quality"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Community review"}),": Pull request process maintains standards"]}),`
`]}),`
`,e.jsx(n.h2,{id:"advanced-usage",children:"Advanced Usage"}),`
`,e.jsx(n.h3,{id:"debugging-and-troubleshooting",children:"Debugging and Troubleshooting"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Debug component generation
VERIFY_PROBE_ENCAPSULATION=1 npm run component:verify-matrix

# Target specific test files
npm run run-component-tests:spec -- ./prop/**/*.test.tsx

# Refresh coverage after rule changes
npm run refresh-coverage-matrix
`})}),`
`,e.jsx(n.h3,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Always run from"})," ",e.jsx(n.code,{children:".ai/testing"})," directory for script shortcuts"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Refresh coverage"})," after changing rules.json"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Document learnings"})," in audit.mdx after major iterations"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Review coverage reports"})," before and after contributions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Test cross-browser"})," compatibility for new components"]}),`
`]})]})}function p(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{p as default};
