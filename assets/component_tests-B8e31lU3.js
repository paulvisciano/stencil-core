import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Bpjpk8ZK.js";import{M as r}from"./blocks-BLFg5S-i.js";import"./iframe-DWOLDdAi.js";import"./preload-helper-D9Z9MdNV.js";import"./index-0Ea0Bo0A.js";function s(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Testing/Framework/Tests/Component Tests",tags:["pending-review"]}),`
`,e.jsx(n.h1,{id:"component-tests",children:"Component Tests"}),`
`,e.jsx("div",{style:{display:"inline-block",padding:"4px 12px",background:"#ffe066",color:"#7c5c00",borderRadius:"16px",fontWeight:"bold",marginBottom:"16px"},children:"⏳ Pending Review"}),`
`,e.jsxs(n.h1,{id:"component-level-tests-testwdio",children:["Component-Level Tests (",e.jsx(n.code,{children:"test/wdio"}),")"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Purpose:"}),' To test the functionality of individual components or features in perfect isolation. These are our "unit tests" for component behavior.']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Technology:"})," WebdriverIO (WDIO) is the primary framework, utilizing the ",e.jsx(n.code,{children:"@wdio/browser-runner/stencil"})," for efficient in-browser component rendering and interaction."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Scope:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Focus on a single feature or permutation at a time. For example, when testing ",e.jsx(n.code,{children:"@Prop({ reflect: true })"}),", there should be separate, isolated tests for ",e.jsx(n.code,{children:"boolean"}),", ",e.jsx(n.code,{children:"number"}),", ",e.jsx(n.code,{children:"string"}),", ",e.jsx(n.code,{children:"Array"}),", ",e.jsx(n.code,{children:"Object"}),", and ",e.jsx(n.code,{children:"Set"})," types."]}),`
`,e.jsx(n.li,{children:"Each test should use its own dedicated component to ensure no interference from other properties or features. This is critical for compatibility with our static analysis tools, which rely on finding these features in isolation."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Benefits:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Precision:"})," Tests are clear, targeted, and unambiguous."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Debugging:"})," Failures are easy to pinpoint to a specific feature."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Robustness:"})," Guarantees that each feature works correctly on its own, forming a reliable foundation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tooling Compatibility:"})," This approach works well with static analysis-based coverage tools."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"file-naming-and-location-conventions",children:"File Naming and Location Conventions"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Test Directory:"})," All component-level tests are located in the ",e.jsx(n.code,{children:"test/wdio"})," directory. Do not place these tests in the ",e.jsx(n.code,{children:"src/components"})," directory."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component Suffix:"})," Test components must have a ",e.jsx(n.code,{children:"-cmp"})," suffix in their filename (e.g., ",e.jsx(n.code,{children:"my-feature-cmp.tsx"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Test File:"})," The test file for a component or a group of related components should be named ",e.jsx(n.code,{children:"cmp.test.tsx"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"writing-and-running-component-tests",children:"Writing and Running Component Tests"}),`
`,e.jsx(n.p,{children:"Prerequisites:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Coverage at 100% for the target decorator(s) using ",e.jsx(n.code,{children:"npm run refresh-coverage-matrix"}),"."]}),`
`,e.jsxs(n.li,{children:["WDIO build succeeds with no compiler errors using ",e.jsx(n.code,{children:"npm run build-wdio-components"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["This guide outlines the complete workflow for creating and executing component-level tests in the ",e.jsx(n.code,{children:"test/wdio"})," directory. Following these steps will help you contribute effectively to the project's test suite."]}),`
`,e.jsx(n.h3,{id:"step-1-establish-a-baseline-with-the-coverage-script",children:"Step 1: Establish a Baseline with the Coverage Script"}),`
`,e.jsx(n.p,{children:"Before writing any new tests, it's important to understand the current test coverage. The coverage script helps you determine if components exist for all required permutations. For more details, refer to the matrix Generation documentation."}),`
`,e.jsx(n.p,{children:"To run the coverage script for all decorators, use the following command:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run refresh-coverage-matrix
`})}),`
`,e.jsxs(n.p,{children:["This command (run from ",e.jsx(n.code,{children:".ai/testing"}),") will analyze the existing test suite and generate a report, giving you a clear picture of where new test components are needed for full permutation coverage."]}),`
`,e.jsx(n.h3,{id:"step-2-generate-test-components",children:"Step 2: Generate Test Components"}),`
`,e.jsxs(n.p,{children:["Once you've identified the missing test cases, the next step is to create the necessary test components. These components should be placed in the ",e.jsx(n.code,{children:"test/wdio"})," directory and follow the established naming conventions."]}),`
`,e.jsx(n.h3,{id:"step-3-build-the-test-components",children:"Step 3: Build the Test Components"}),`
`,e.jsxs(n.p,{children:["After creating or modifying your test components, you need to build them. Run the build command from ",e.jsx(n.code,{children:".ai/testing"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run build-wdio-components
`})}),`
`,e.jsx(n.h3,{id:"step-4-write-the-tests",children:"Step 4: Write the Tests"}),`
`,e.jsxs(n.p,{children:["With the components built, you can now write the tests. These tests should also be located in the ",e.jsx(n.code,{children:"test/wdio"})," directory and should be written to verify the functionality of the components you've just created."]}),`
`,e.jsx(n.h3,{id:"step-5-run-the-tests",children:"Step 5: Run the Tests"}),`
`,e.jsx(n.p,{children:"To run the tests and ensure they pass, follow these steps:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Update the test configuration"}),": Open the ",e.jsx(n.code,{children:"wdio.conf.ts"})," file and modify the ",e.jsx(n.code,{children:"specs"})," array to point to your test file(s)."]}),`
`,e.jsx(n.p,{children:"For running a single test:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// ...
specs: [['./state/**/*.test.tsx']],
// ...
`})}),`
`,e.jsx(n.p,{children:"For running a full suite of tests (e.g., all tests for a decorator), you can use a glob pattern:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// ...
specs: [['./**/*.test.tsx']],
// ...
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["Run the tests from ",e.jsx(n.code,{children:".ai/testing"})]}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run run-component-tests
`})}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"This will execute your tests and provide feedback on whether they pass or fail."}),`
`,e.jsx(n.h3,{id:"step-6-document-learnings",children:"Step 6: Document Learnings"}),`
`,e.jsxs(n.p,{children:['After achieving 100% coverage for a feature, the final step is to document the key learnings from the iteration. This is a crucial part of our self-improving testing loop. For a complete guide on what to document and where, please refer to the "Continuous Improvement" section of the main ',e.jsx(n.a,{href:"./testing_strategy.md",children:"Testing Strategy"})," document."]}),`
`,e.jsx(n.h2,{id:"using-ai-to-generate-component-tests",children:"Using AI to Generate Component Tests"}),`
`,e.jsx(n.p,{children:"During the August 2025 iteration, we leveraged Copilot GPT-4.1 to automate the generation of component-level tests. To maximize AI effectiveness and ensure alignment with project standards:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Import the ",e.jsx(n.code,{children:".ai"})," folder for context:"]})," Always provide the AI assistant with the contents of the ",e.jsx(n.code,{children:".ai"})," folder so it understands coding standards, domain knowledge, and testing strategy."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Prompt Example:"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Utilizing the testing strategy covered in the .ai folder, let's get the @Method matrix up to 100%, follow the instructions under component_tests Writing and Running Component Tests"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Workflow:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Run the coverage script to identify missing permutations."}),`
`,e.jsx(n.li,{children:"Use the AI assistant to generate missing test components and WDIO tests, following the patterns and conventions documented in this file."}),`
`,e.jsx(n.li,{children:"Build the components and run the tests as described above."}),`
`,e.jsx(n.li,{children:"Document learnings and update the audit log after each coverage push."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"This approach enables rapid, standards-compliant test generation and ensures continuous improvement through human-AI collaboration."}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsx(n.h3,{id:"testing-state-mutations",children:"Testing State Mutations"}),`
`,e.jsxs(n.p,{children:["When testing how a component's state changes (e.g., when a ",e.jsx(n.code,{children:"@Prop({ mutable: true })"})," is modified), it's crucial to verify the component's behavior before and after the change. A reliable pattern for this is:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Initial State Assertion:"})," Verify the initial state of the component's property."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"User-like Interaction:"})," Trigger an action that should cause the state to change. This is typically a click on a button or another user-driven event."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Final State Assertion:"})," Verify that the property has been updated to the new, expected value."]}),`
`]}),`
`,e.jsx(n.p,{children:'This "before and after" approach ensures that the mutation is a direct result of the interaction and that the component behaves as expected.'}),`
`,e.jsx(n.h3,{id:"testing-event-emissions",children:"Testing Event Emissions"}),`
`,e.jsxs(n.p,{children:["When testing ",e.jsx(n.code,{children:"@Event"})," decorators, the most reliable and direct pattern is to use an in-component ",e.jsx(n.code,{children:"@Listen"})," decorator to verify that the event was emitted. This avoids the complexities and potential flakiness of trying to intercept events from outside the component."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsxs(n.p,{children:["A component that emits a ",e.jsx(n.code,{children:"testEvent"})," can have a simple counter that is incremented by a ",e.jsx(n.code,{children:"@Listen('testEvent')"})," handler. The test then only needs to check if the counter's value has been updated."]}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Component (",e.jsx(n.code,{children:"event-basic-cmp.tsx"}),"):"]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Component, Event, EventEmitter, h, Listen, State } from '@stencil/core';

@Component({ tag: 'event-basic' })
export class EventBasic {
  @Event() testEvent: EventEmitter;
  @State() counter = 0;

  @Listen('testEvent')
  testEventHandler() {
    this.counter++;
  }

  render() {
    return (
      <button onClick={() => this.testEvent.emit()}>Emit Event</button>
      <p>Emission count: <span id="counter">{this.counter}</span></p>
    );
  }
}
`})}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Test (",e.jsx(n.code,{children:"cmp.test.tsx"}),"):"]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';

describe('event-basic', () => {
  beforeEach(async () => {
    render({
      template: () => <event-basic></event-basic>,
    });
  });

  it('should increment counter when event is emitted', async () => {
    await expect($('#counter')).toHaveText('0');
    await $('button').click();
    await expect($('#counter')).toHaveText('1');
  });
});
`})}),`
`,e.jsx(n.p,{children:"This pattern is simple, robust, and aligns with Stencil's architecture, making it the preferred method for testing event emissions."}),`
`,e.jsx(n.h2,{id:"important-notes-for-future-iterations",children:"Important Notes for Future Iterations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Stencil @Method Decorator:"})," Only async methods (returning a Promise) are valid. Always review framework constraints and update the coverage matrix and test generation logic to exclude unsupported permutations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Matrix Validity:"})," Before generating tests, manually review the coverage matrix to ensure it matches the actual feature set supported by the framework. Coverage metrics are only meaningful if the matrix is correct."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Consistent Test Patterns:"})," For WDIO component tests, use a consistent pattern (e.g., DOM update via button click) to ensure reliable automation and coverage."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Build/Test Workflow:"})," Always follow the documented build and test workflow (",e.jsx(n.code,{children:"npm run build-wdio-components"}),", then ",e.jsx(n.code,{children:"npm run run-component-tests"}),"). Update documentation if the process changes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Document Learnings:"})," After each coverage push, document key learnings and process changes in the audit log. This ensures continuous improvement and helps future contributors avoid past mistakes."]}),`
`]})]})}function p(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{p as default};
