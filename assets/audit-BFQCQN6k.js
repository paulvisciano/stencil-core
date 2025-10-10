import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-DkM_JNzF.js";import{M as r}from"./blocks-CGqGehBw.js";import"./iframe-DnsNI89h.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DfHBohhK.js";function s(t){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Testing/Framework/Audit",tags:["pending-review"]}),`
`,e.jsx(n.h1,{id:"testing-strategy-audit-log",children:"Testing Strategy Audit Log"}),`
`,e.jsx("div",{style:{display:"inline-block",padding:"4px 12px",background:"#ffe066",color:"#7c5c00",borderRadius:"16px",fontWeight:"bold",marginBottom:"16px"},children:"⏳ Pending Review"}),`
`,e.jsx(n.p,{children:"This document tracks the progress and effectiveness of the GenAI-powered testing strategy over time. Each entry represents a significant iteration or application of the strategy to a specific feature set."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h1,{id:"audit-log-genai-testing-loop-improvements",children:"Audit Log: GenAI Testing Loop Improvements"}),`
`,e.jsx(n.h2,{id:"manual-verification-of-coverage-matrix",children:"Manual Verification of Coverage Matrix"}),`
`,e.jsx(n.p,{children:"A key step in the testing loop is manual verification of the coverage matrix. After generating components and tests for all decorator permutations, manually change some decorator options (e.g., target, capture) in component files and re-run the coverage script. Confirm that the coverage report updates to reflect these changes. This ensures the coverage script accurately detects permutations and the matrix is reliable."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Best Practice:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Always perform manual verification after reaching 100% coverage."}),`
`,e.jsx(n.li,{children:"Document any issues or false positives found during this step."}),`
`,e.jsx(n.li,{children:"Update the audit log and documentation to reflect improvements."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"iteration-component--ruledriven-matrix-generator-and-verify-guard",children:["Iteration: ",e.jsx(n.code,{children:"@Component"})," — Rule‑driven matrix, generator, and verify guard"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Date:"})," September 14, 2025"]}),`
`,e.jsx(n.h3,{id:"summary",children:"Summary"}),`
`,e.jsx(n.p,{children:"This iteration went well beyond expectations. GPT‑5 proposed and implemented a rule‑driven approach that materially improved speed and reliability:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Authored a dedicated generator script for matrix components (10x+ faster end‑to‑end loop)."}),`
`,e.jsx(n.li,{children:"Extracted human‑readable rules into a JSON file as the single source of truth."}),`
`,e.jsx(n.li,{children:"Added a verify guard script to enforce parity, grouping, and exclusivity, with a probe to validate rule‑driven growth."}),`
`]}),`
`,e.jsx(n.h3,{id:"key-changes",children:"Key Changes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Rules as source of truth",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Component/rules.json"}),": options schema, exclusivity groups, modes (grouping), emit naming/assets."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Coverage refactor",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Component/coverage.js"}),": builds permutation space from rules (cartesian + exclusivity), validates covered permutations via rules, records relative file paths; supports env override ",e.jsx(n.code,{children:"COMPONENT_RULES_PATH"})," for probes."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Generator integration",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Component/generate-components.js"}),": derives names from ",e.jsx(n.code,{children:"rules.emit.naming"}),", groups files via ",e.jsx(n.code,{children:"rules.modes"})," (shadow/scoped/light), emits exactly one style prop per file from ",e.jsx(n.code,{children:"rules.emit.assets"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Verify guard",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"verify-matrix.js"}),": re‑runs coverage; asserts covered === total; asserts ",e.jsx(n.code,{children:".tsx"})," parity under ",e.jsx(n.code,{children:"test/wdio/component-decorator/**"}),"; validates exclusivity/groups using recorded files; optional probe removing the “encapsulation” group to confirm total permutations increase; portable (no shell dependency, direct Node invocation)."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Scripts/docs",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".ai/testing/package.json"}),": added ",e.jsx(n.code,{children:"component:*"})," and ",e.jsx(n.code,{children:"state:*"})," shortcuts, including ",e.jsx(n.code,{children:"component:verify-matrix"})," and ",e.jsx(n.code,{children:"state:verify-matrix"}),"."]}),`
`,e.jsx(n.li,{children:"Quickstart updated to verify before build and document the recovery loop (tweak rules → coverage‑loop → verify → build → tests)."}),`
`,e.jsx(n.li,{children:"Storybook nav updated to surface Quickstart."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"impact",children:"Impact"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Speed: Loop execution improved by an estimated 10x+ due to automated generation and a clean verify step."}),`
`,e.jsx(n.li,{children:"Reliability: Exclusivity and grouping are now enforced automatically; parity guard prevents drift; probe confirms rules genuinely drive permutation space."}),`
`]}),`
`,e.jsx(n.h3,{id:"metrics",children:"Metrics"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Coverage: 192/192 (100.0%)."}),`
`,e.jsx(n.li,{children:"Probe: Removing the “encapsulation” exclusivity increased total permutations from 192 → 216 (as expected), without generating files."}),`
`,e.jsxs(n.li,{children:["Parity: ",e.jsx(n.code,{children:".tsx"})," count under ",e.jsx(n.code,{children:"test/wdio/component-decorator/**"})," equals the covered permutations (192) recorded in ",e.jsx(n.code,{children:"Testing/Decorators/Component/coverage-data.json"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"workflow-update",children:"Workflow Update"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Recommended order: coverage‑loop → verify‑matrix → build → tests."}),`
`,e.jsx(n.li,{children:"On compiler errors after generation: tweak rules → re‑run coverage‑loop → verify‑matrix → build → tests."}),`
`]}),`
`,e.jsx(n.h3,{id:"lessons-learned",children:"Lessons Learned"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Centralizing rules enables both humans and automation to reason about validity and growth."}),`
`,e.jsx(n.li,{children:"Recording file paths in coverage enables downstream structural checks (grouping by render mode)."}),`
`,e.jsxs(n.li,{children:["Avoid shell dependencies for portability; prefer ",e.jsx(n.code,{children:"execFileSync(process.execPath, ...)"}),"."]}),`
`,e.jsx(n.li,{children:"A small, deterministic verify guard prevents slow drift and keeps contributors aligned."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"iteration-1-prop-decorator",children:["Iteration 1: ",e.jsx(n.code,{children:"@Prop"})," Decorator"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Date:"})," August 19, 2025"]}),`
`,e.jsx(n.h3,{id:"phase-1-initial-coverage-push",children:"Phase 1: Initial Coverage Push"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Target Feature:"})," ",e.jsx(n.code,{children:"@Prop"})," decorator."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Initial Focus:"})," Permutations of the ",e.jsx(n.code,{children:"type"})," and ",e.jsx(n.code,{children:"reflect"})," properties."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Action:"})," Utilized the GenAI-powered loop to generate component-level tests (",e.jsx(n.code,{children:"test/wdio"}),") for all identified permutations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Outcome:"})," The coverage script reported ",e.jsx(n.strong,{children:"100% coverage"})," for the known permutations. The testing strategy appeared to be a complete success."]}),`
`]}),`
`,e.jsx(n.h3,{id:"phase-2-discovery-of-a-blind-spot",children:"Phase 2: Discovery of a Blind Spot"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Action:"})," A manual review of the ",e.jsx(n.code,{children:"@Prop"})," feature set revealed that the ",e.jsx(n.code,{children:"mutable"})," property was not included in our permutation matrix or the coverage analysis script."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Impact:"})," The initial 100% coverage metric was misleading. It only reflected the permutations we were aware of, not the complete feature set."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Outcome:"})," The ",e.jsx(n.code,{children:"prop-coverage.js"})," script was updated to recognize the ",e.jsx(n.code,{children:"mutable"})," property. This immediately doubled the total number of permutations, causing the coverage metric to plummet from ",e.jsx(n.strong,{children:"100% to 62.5%"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"phase-3-addressing-the-coverage-gap",children:"Phase 3: Addressing the Coverage Gap"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Action:"})," Re-engaged the GenAI-powered testing loop with the updated and more accurate permutation matrix. The AI assistant generated a new suite of tests specifically targeting the ",e.jsx(n.code,{children:"mutable"})," permutations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Outcome:"})," The new tests successfully covered the missing permutations, bringing the total coverage for the ",e.jsx(n.code,{children:"@Prop"})," decorator back to ",e.jsx(n.strong,{children:"100%"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"key-learnings",children:"Key Learnings:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'The testing loop proved to be self-correcting. When a blind spot was identified and the "source of truth" (the coverage script) was updated, the strategy seamlessly guided the process of filling the gap.'}),`
`,e.jsx(n.li,{children:"Static analysis is a powerful but imperfect tool. It is only as good as the patterns it's configured to find, highlighting the need for periodic human review to identify what might be missing."}),`
`,e.jsx(n.li,{children:"The exponential cost of comprehensive testing was validated. Adding a single boolean property doubled the testing matrix, reinforcing the need for an efficient and scalable strategy."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Human-AI Collaboration is Key"}),": This entire process was a partnership. The AI was a powerful engine for generating code and executing the testing loop, but human insight was required to identify the initial blind spot (",e.jsx(n.code,{children:"mutable"}),") and refine the strategy. The most effective approach is one that leverages AI for speed and scale while relying on human expertise for critical thinking and direction."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"iteration-2-refining-prop-mutation-tests",children:["Iteration 2: Refining ",e.jsx(n.code,{children:"@Prop"})," Mutation Tests"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Date:"})," August 19, 2025"]}),`
`,e.jsx(n.h3,{id:"phase-1-addressing-mutation-test-failures",children:"Phase 1: Addressing Mutation Test Failures"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Target Feature:"})," ",e.jsx(n.code,{children:"@Prop"})," decorator with ",e.jsx(n.code,{children:"mutable: true"})," and ",e.jsx(n.code,{children:"reflect: true"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Initial State:"})," While coverage was at 100%, it was discovered that tests for complex types (",e.jsx(n.code,{children:"Array"}),", ",e.jsx(n.code,{children:"Object"}),") were not passing as expected after a mutation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Action:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Investigated the Stencil runtime to identify the root cause of the reflection issue."}),`
`,e.jsx(n.li,{children:"Temporarily modified the tests to expect the buggy behavior, allowing the build to pass while documenting the issue."}),`
`,e.jsx(n.li,{children:'Updated the Storybook documentation to include a "Known Bugs" section, making the issues transparent.'}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Outcome:"})," A reliable pattern for testing mutations was established:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Render a component with an initial state."}),`
`,e.jsx(n.li,{children:"Verify the initial state and attribute reflection (or lack thereof for known bugs)."}),`
`,e.jsx(n.li,{children:"Trigger a mutation (e.g., by clicking a button)."}),`
`,e.jsx(n.li,{children:"Verify the component's state and attribute reflection after the mutation."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"phase-2-improving-static-analysis-and-documentation",children:"Phase 2: Improving Static Analysis and Documentation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Action:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Refined the permutation matrix generation to more accurately capture all ",e.jsx(n.code,{children:"@Prop"})," variations."]}),`
`,e.jsxs(n.li,{children:["Discovered that the static analysis script was not correctly identifying all ",e.jsx(n.code,{children:"@Prop"})," decorators, leading to an inaccurate coverage report."]}),`
`,e.jsx(n.li,{children:"Improved the testing strategy documentation to be more modular and easier to navigate."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Outcome:"})," The static analysis tools and documentation were made more robust, ensuring a more accurate and maintainable testing framework."]}),`
`]}),`
`,e.jsx(n.h3,{id:"key-learnings-1",children:"Key Learnings:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Mutation Testing Pattern:"})," A standardized, reliable pattern for testing mutations was developed and validated."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Static Analysis Refinement:"})," The process revealed weaknesses in the static analysis script, which were subsequently improved."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Iterative Documentation:"})," The testing strategy documentation itself is part of the iterative loop and should be updated with new learnings as they emerge."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"iteration-3-state-decorator",children:["Iteration 3: ",e.jsx(n.code,{children:"@State"})," Decorator"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Date:"})," August 21, 2025"]}),`
`,e.jsx(n.h3,{id:"phase-1-initial-test-generation",children:"Phase 1: Initial Test Generation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Target Feature:"})," ",e.jsx(n.code,{children:"@State"})," decorator."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Initial Focus:"})," All permutations of type (",e.jsx(n.code,{children:"string"}),", ",e.jsx(n.code,{children:"number"}),", ",e.jsx(n.code,{children:"boolean"}),", ",e.jsx(n.code,{children:"array"}),", ",e.jsx(n.code,{children:"object"}),", ",e.jsx(n.code,{children:"any"}),") and default value presence (",e.jsx(n.code,{children:"true"}),", ",e.jsx(n.code,{children:"false"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Action:"})," Applied the GenAI-powered testing loop to generate component-level tests in ",e.jsx(n.code,{children:"test/wdio/state/tests"})," for all 12 identified permutations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Outcome:"})," Successfully generated 10 component files and corresponding tests. All tests passed on first execution."]}),`
`]}),`
`,e.jsx(n.h3,{id:"phase-2-coverage-script-issues",children:"Phase 2: Coverage Script Issues"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Challenge:"})," Despite generating all necessary components, the coverage script initially reported only 75% coverage, missing 3 permutations:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"boolean"})," with default value (",e.jsx(n.code,{children:"true"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"object"})," with default value (",e.jsx(n.code,{children:"true"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"object"})," without default value (",e.jsx(n.code,{children:"false"}),")"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Root Cause:"})," The regex pattern in ",e.jsx(n.code,{children:"state-coverage.js"})," was overly greedy (",e.jsx(n.code,{children:"[\\s\\S]*?;"}),") which caused incorrect parsing of initializers, especially in multi-statement contexts."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Action:"})," Updated the regex from ",e.jsx(n.code,{children:`/@State\\(\\)\\s+([\\w\\d_]+)(?::\\s*([\\w\\d\\[\\]<>{}|.'"]+))?(\\s*=\\s*[\\s\\S]*?;)?/g`})," to ",e.jsx(n.code,{children:`/@State\\(\\)\\s+([\\w\\d_]+)(?::\\s*([\\w\\d\\[\\]<>{}|.'"]+))?(\\s*=\\s*[^;]*;)?/g`})," to be non-greedy and more precise."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Outcome:"})," After the regex fix, coverage improved to 91.67% with only the ",e.jsx(n.code,{children:"boolean"})," with default value still missing."]}),`
`]}),`
`,e.jsx(n.h3,{id:"phase-3-final-coverage-resolution",children:"Phase 3: Final Coverage Resolution"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Challenge:"})," The script still failed to identify two permutations: ",e.jsx(n.code,{children:"object"})," without a default value and ",e.jsx(n.code,{children:"any"})," with a default value."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Root Cause:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["The test component for ",e.jsx(n.code,{children:"object"})," without a default value (",e.jsx(n.code,{children:"state-object-no-default-cmp.tsx"}),") had an incorrect type annotation (",e.jsx(n.code,{children:"any"})," instead of ",e.jsx(n.code,{children:"object"}),")."]}),`
`,e.jsxs(n.li,{children:["The test component for ",e.jsx(n.code,{children:"any"})," with a default value (",e.jsx(n.code,{children:"state-any-default-cmp.tsx"}),") was missing a type annotation, causing the script to infer the type as ",e.jsx(n.code,{children:"string"})," from the default value."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Action:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Corrected the type annotation in ",e.jsx(n.code,{children:"state-object-no-default-cmp.tsx"})," to ",e.jsx(n.code,{children:"object"}),"."]}),`
`,e.jsxs(n.li,{children:["Added the ",e.jsx(n.code,{children:": any"})," type annotation to ",e.jsx(n.code,{children:"state-any-default-cmp.tsx"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Outcome:"})," After these corrections, the coverage script successfully ran and reported ",e.jsx(n.strong,{children:"100% coverage"}),". All 12 permutations for the ",e.jsx(n.code,{children:"@State"})," decorator are now fully tested."]}),`
`]}),`
`,e.jsx(n.h3,{id:"key-learnings-2",children:"Key Learnings:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Test Generation Success:"})," The AI successfully generated all required test components and tests on the first attempt, showing improvement in the testing loop efficiency."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Coverage Script Vulnerabilities:"})," Regex patterns in coverage scripts need careful crafting to avoid false negatives. Greedy patterns can cause incorrect parsing in complex code contexts."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"File Placement Accuracy:"})," All components were correctly placed under ",e.jsx(n.code,{children:"test/wdio/state/matrix/**"})," (grouped by type), and tests live in ",e.jsx(n.code,{children:"test/wdio/state/tests"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Documentation Workflow Improvements:"})," The testing workflow documentation was refined to reflect the correct single-step build process (",e.jsx(n.code,{children:"cd test/wdio && npm run build"}),") rather than the initially documented two-step process."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Testing Strategy Evolution:"}),' Added the crucial sixth step to the testing loop: "Document Learnings" to ensure continuous improvement between iterations.']}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"iteration-4-event-decorator",children:["Iteration 4: ",e.jsx(n.code,{children:"@Event"})," Decorator"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Date:"})," August 26, 2025"]}),`
`,e.jsx(n.h3,{id:"phase-1-initial-misdirection",children:"Phase 1: Initial Misdirection"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Target Feature:"})," ",e.jsx(n.code,{children:"@Event"})," decorator."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Initial Action:"})," The AI assistant was tasked with bringing ",e.jsx(n.code,{children:"@Event"})," decorator coverage to 100%. However, it immediately went down the wrong path by attempting to generate E2E tests instead of component tests, and placing them in the incorrect directory (",e.jsx(n.code,{children:"test/end-to-end/"})," instead of ",e.jsx(n.code,{children:"test/wdio/"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Correction:"})," Human intervention was required to redirect the AI, pointing it to the correct ",e.jsx(n.code,{children:"wdio"})," directory and the ",e.jsx(n.code,{children:"@State"})," decorator tests as a pattern to follow."]}),`
`]}),`
`,e.jsx(n.h3,{id:"phase-2-test-implementation-failures",children:"Phase 2: Test Implementation Failures"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Challenge:"})," The AI struggled to adopt the correct testing pattern. Its first attempt at creating the test file (",e.jsx(n.code,{children:"cmp.test.tsx"}),") used ",e.jsx(n.code,{children:"newSpecPage"})," from Stencil's unit testing framework, which was incorrect for component tests."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Correction:"})," The user again corrected the AI, pointing out the convention mismatch."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Second Failure:"})," The AI's next attempt was also flawed. It used a non-existent ",e.jsx(n.code,{children:"browser.spyOn"})," method, which caused the tests to fail. This led to a frustrating loop where the AI was unable to correct its own mistake."]}),`
`]}),`
`,e.jsx(n.h3,{id:"phase-3-file-system-and-pattern-discovery-issues",children:"Phase 3: File System and Pattern Discovery Issues"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Challenge:"})," The AI entered a persistent failure loop where it was unable to successfully write to the test file (",e.jsx(n.code,{children:"cmp.test.tsx"}),"). The file repeatedly appeared as empty or corrupted, requiring the user to manually revert changes and suggest workarounds, such as using a temporary file name."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"A Better Pattern Revealed:"})," The most significant issue was the AI's failure to recognize the simplest existing testing pattern. While the AI was attempting a complex and incorrect solution using ",e.jsx(n.code,{children:"browser.execute"}),", the user pointed out that existing tests (like ",e.jsx(n.code,{children:"event-basic"}),") used a much cleaner in-component ",e.jsx(n.code,{children:"@Listen"})," decorator to verify the event emission."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Outcome:"})," This insight was critical. It rendered the AI's complex solution obsolete and highlighted a major blind spot in its ability to learn from the most relevant examples in the codebase."]}),`
`]}),`
`,e.jsx(n.h3,{id:"phase-4-final-refactoring-and-success",children:"Phase 4: Final Refactoring and Success"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Action:"})," Following the user's guidance, the AI refactored all the newly generated components to use the ",e.jsx(n.code,{children:"@Listen"})," pattern. The test file (",e.jsx(n.code,{children:"cmp-tests.tsx"}),") was simplified to check a counter, aligning with the established, simpler convention."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Outcome:"})," After adopting the correct pattern as identified by the user, the tests were simplified, and the process was successfully completed."]}),`
`]}),`
`,e.jsx(n.h3,{id:"key-learnings-3",children:"Key Learnings:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Pattern Blindness:"})," This iteration revealed a critical failure in the AI's ability to identify and adopt the best and simplest existing patterns, even when provided with examples. It defaulted to a more complex, generic, and ultimately incorrect solution."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tool-Level Instability:"})," The AI exhibited significant instability with basic file operations, leading to a frustrating user experience and requiring manual workarounds. This points to a need for more robust error handling and self-correction in the AI's tool usage."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Over-Reliance on Correction:"})," The AI was entirely dependent on the user for course correction at every major step. The human's role shifted from supervisor to constant troubleshooter and pattern-matcher."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:'The Cost of "Almost Right":'})," The AI's ability to generate code that was syntactically correct but functionally wrong (e.g., using ",e.jsx(n.code,{children:"browser.spyOn"}),") proved to be a significant time sink, demonstrating that superficial correctness is not a substitute for understanding context and convention."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"iteration-5-method-decorator-async-only",children:["Iteration 5: ",e.jsx(n.code,{children:"@Method"})," Decorator (Async Only)"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Date:"})," August 27, 2025"]}),`
`,e.jsx(n.h3,{id:"phase-1-matrix-correction-and-coverage-alignment",children:"Phase 1: Matrix Correction and Coverage Alignment"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Target Feature:"})," Stencil ",e.jsx(n.code,{children:"@Method"})," decorator (async-only)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Initial State:"})," Coverage script and test components included invalid permutations (non-async methods), leading to misleading coverage metrics and test failures."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Action:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Manually audited and removed all non-async permutations from the coverage script and test components."}),`
`,e.jsx(n.li,{children:"Updated the coverage script to only generate and track valid async permutations (args/no args, return/no return)."}),`
`,e.jsxs(n.li,{children:["Regenerated all test components to use ",e.jsx(n.code,{children:"@Method() async ...(): Promise<...>"})," signatures."]}),`
`,e.jsx(n.li,{children:"Ensured each component updated the DOM for reliable WDIO verification."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Outcome:"})," Coverage script now accurately reflects only valid async permutations. All test components conform to Stencil requirements."]}),`
`]}),`
`,e.jsx(n.h3,{id:"phase-2-test-implementation-and-build-process",children:"Phase 2: Test Implementation and Build Process"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Action:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Generated missing async test components for all valid permutations."}),`
`,e.jsx(n.li,{children:"Updated WDIO tests to cover each permutation, using DOM-based assertions."}),`
`,e.jsxs(n.li,{children:["Documented and followed the correct build process (",e.jsx(n.code,{children:"cd test/wdio && npm run build"}),")."]}),`
`,e.jsx(n.li,{children:"Ran WDIO tests and confirmed all pass."}),`
`,e.jsx(n.li,{children:"Reran the coverage script, confirming 100% coverage for the async-only matrix."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Outcome:"})," All async method permutations are covered by both tests and static analysis. No missing cases remain."]}),`
`]}),`
`,e.jsx(n.h3,{id:"ai-assisted-test-generation-copilot-gpt-41",children:"AI-Assisted Test Generation (Copilot GPT-4.1)"}),`
`,e.jsxs(n.p,{children:["During this iteration, we used Copilot GPT-4.1 to automate the generation of component-level tests for the Stencil ",e.jsx(n.code,{children:"@Method"})," decorator. Key steps and best practices:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Context Setup:"})," Imported the ",e.jsx(n.code,{children:".ai"})," folder to provide Copilot with project standards, domain knowledge, and the testing strategy."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Prompt Used:"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Utilizing the testing strategy covered in the .ai folder, let's get the @Method matrix up to 100%, follow the instructions under component_tests Writing and Running Component Tests"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Process:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Ran the coverage script to identify missing permutations."}),`
`,e.jsx(n.li,{children:"Used Copilot GPT-4.1 to generate missing async test components and WDIO tests, following the documented patterns."}),`
`,e.jsx(n.li,{children:"Built the components and ran the tests to confirm coverage and correctness."}),`
`,e.jsx(n.li,{children:"Documented learnings and process improvements in both the audit log and component test guide."}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Takeaway:"}),`
AI can rapidly generate standards-compliant tests when provided with clear context and instructions. Always combine AI automation with human review and documentation for best results.`]}),`
`,e.jsx(n.h3,{id:"key-learnings-4",children:"Key Learnings:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Matrix Validity is Critical:"})," Coverage metrics are only meaningful if the matrix reflects what is actually supported by the framework. Manual review is essential when framework constraints change."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Build and Test Workflow:"})," The correct build/test workflow is crucial for reliable results. Documentation should always reflect the latest process."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Pattern Consistency:"})," All test components should follow a consistent pattern (DOM update via button click) for reliable WDIO verification."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Human-AI Collaboration:"})," Human review was required to identify invalid permutations and guide the AI to correct the matrix and test suite. The AI efficiently generated and updated code once the correct strategy was established."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Documentation Loop:"})," Each iteration should end with documentation of learnings and process improvements to ensure future accuracy and efficiency."]}),`
`]}),`
`,e.jsx(n.h3,{id:"process-improvements-made",children:"Process Improvements Made:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Coverage Matrix Correction:"})," Updated coverage scripts to only include valid permutations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Test Component Consistency:"})," Standardized async method test component patterns for WDIO reliability."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Build Process Documentation:"})," Ensured documentation matches the actual build/test workflow."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Final Coverage Validation:"})," Confirmed 100% coverage and passing tests for all valid async permutations."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"iteration-6-listen-decorator-host-target-tag-name-consistency",children:["Iteration 6: ",e.jsx(n.code,{children:"@Listen"})," Decorator (Host Target Tag Name Consistency)"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Date:"})," September 5, 2025"]}),`
`,e.jsx(n.h3,{id:"phase-1-host-target-tag-name-mismatch",children:"Phase 1: Host Target Tag Name Mismatch"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Issue:"})," Automated generation of Stencil components and WDIO tests for ",e.jsx(n.code,{children:"@Listen"})," permutations resulted in a tag name mismatch for host-targeted components and their tests. Components used the tag ",e.jsx(n.code,{children:"listen-host-click-capture-nopassive"}),", while tests used ",e.jsx(n.code,{children:"cmp-host-click-capture-nopassive"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Impact:"})," Host tests failed because the rendered element did not match the tag name expected by the test, causing the host element not to be found or events not to fire."]}),`
`]}),`
`,e.jsx(n.h3,{id:"phase-2-diagnosis-and-correction",children:"Phase 2: Diagnosis and Correction"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Action:"})," Identified the mismatch by comparing the component's ",e.jsx(n.code,{children:"@Component({ tag })"})," property and the test's render/selector usage."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Correction:"})," Updated all host WDIO tests to use the correct tag name as defined in the component, ensuring both render and event dispatch target ",e.jsx(n.code,{children:"listen-host-click-capture-nopassive"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Outcome:"})," Host tests now pass as expected, confirming correct event handling and coverage."]}),`
`]}),`
`,e.jsx(n.h3,{id:"key-learnings-5",children:"Key Learnings:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Naming Consistency:"})," Automated test and component generation must derive tag names from the component's ",e.jsx(n.code,{children:"@Component({ tag })"})," property to ensure consistency."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Validation Step:"})," Add a validation step to the automation pipeline to check that all tests reference the correct tag name for their component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Source of Truth:"})," Use the component's tag property as the single source of truth for naming in both code and tests."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Human-AI Collaboration:"})," Human review remains essential for catching subtle mismatches that static analysis may miss."]}),`
`]}),`
`,e.jsx(n.h3,{id:"process-improvements-made-1",children:"Process Improvements Made:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automation Update:"})," Update generation scripts to always use the component's tag property for test rendering and selectors."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Validation Script:"})," Add a script to audit test/component tag name consistency across the codebase."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Documentation:"})," Record this learning in the audit log and update the component test guide to emphasize tag name consistency."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"2025-09-05-input-event-wdio-test-pattern",children:"2025-09-05: Input Event WDIO Test Pattern"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Issue: WDIO ",e.jsx(n.code,{children:"setValue('test')"})," on an input triggers the ",e.jsx(n.code,{children:"input"})," event for each character, incrementing the counter multiple times."]}),`
`,e.jsxs(n.li,{children:["Solution: For robust Stencil ",e.jsx(n.code,{children:"@Listen('input')"})," tests, always render the input in the component, select it by id, and use ",e.jsx(n.code,{children:"setValue('t')"})," for a single event or ",e.jsx(n.code,{children:"setValue('test')"})," for multiple events. Match the assertion to the expected event count."]}),`
`,e.jsx(n.li,{children:"Pattern applied to all input event tests for reliable coverage."}),`
`,e.jsxs(n.li,{children:["Example:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Component renders ",e.jsx(n.code,{children:'<input id="test-input" />'})," and output div."]}),`
`,e.jsx(n.li,{children:"Test waits for input, sets value, and asserts correct count."}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Result: All input event WDIO tests now pass and coverage is complete."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"stencil-2-target-update",children:"Stencil 2 Target Update"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"parent"})," target is no longer supported for the ",e.jsx(n.code,{children:"@Listen"})," decorator in Stencil 2. All documentation, coverage matrices, and generated components/tests should exclude this target going forward."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"2025-09-08-script-path-management-and-automation",children:"2025-09-08: Script Path Management and Automation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Issue:"})," Frequent errors and confusion occurred when running coverage, build, and test scripts from the wrong working directory, due to different terminal root folders and relative path mismatches."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Solution:"})," Added a ",e.jsx(n.code,{children:"package.json"})," file with shortcut scripts to ",e.jsx(n.code,{children:".ai/testing"})," that automatically ",e.jsx(n.code,{children:"cd"})," into the correct directory before running the actual script. This ensures all commands are executed from a consistent location and paths are resolved correctly."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Best Practice:"})," Always run scripts using the shortcuts in ",e.jsx(n.code,{children:".ai/testing/package.json"})," to avoid path issues. Update the overview and documentation to reflect this workflow improvement."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Learning:"})," Automation and documentation must account for environment and path context. Centralizing script execution via shortcut scripts greatly reduces errors and improves developer experience."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"iteration-7-component-decorator-permutation-coverage",children:["Iteration 7: ",e.jsx(n.code,{children:"@Component"})," Decorator Permutation Coverage"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Date:"})," September 8, 2025"]}),`
`,e.jsx(n.h3,{id:"goals",children:"Goals"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Reach 100% coverage for all valid ",e.jsx(n.code,{children:"@Component"})," decorator permutations defined by the coverage script."]}),`
`,e.jsxs(n.li,{children:["Enforce strict mutual exclusivity: only one of ",e.jsx(n.code,{children:"styleUrl"}),", ",e.jsx(n.code,{children:"styleUrls"}),", or ",e.jsx(n.code,{children:"styles"})," per component."]}),`
`,e.jsxs(n.li,{children:["Maintain a one-to-one mapping: exactly one ",e.jsx(n.code,{children:".tsx"})," component per unique permutation."]}),`
`,e.jsxs(n.li,{children:["Keep file count under ",e.jsx(n.code,{children:"test/wdio/component-decorator/**"})," equal to the “covered” count in ",e.jsx(n.code,{children:"Component/coverage-data.json"})," after each run."]}),`
`]}),`
`,e.jsx(n.h3,{id:"actions-taken",children:"Actions Taken"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Audited and removed invalid components that set multiple style properties; created canonical ",e.jsx(n.code,{children:"matrix/"})," for valid permutations."]}),`
`,e.jsxs(n.li,{children:["Implemented naming and placement conventions under ",e.jsx(n.code,{children:"test/wdio/component-decorator/matrix/"})," (descriptive filenames; tag matches filename)."]}),`
`,e.jsxs(n.li,{children:["Generated batches of valid permutations with exclusivity:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Initial 15 baseline components (shadow/scoped/assetsDirs/formAssociated with single style key when present)."}),`
`,e.jsx(n.li,{children:"+1 additional specific permutation."}),`
`,e.jsxs(n.li,{children:["+10 permutations for ",e.jsx(n.code,{children:"shadow: true, scoped: false"})," across ",e.jsx(n.code,{children:"formAssociated"})," and style variants."]}),`
`,e.jsxs(n.li,{children:["+20 permutations spanning:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"shadow: true"})," with assetsDirs/formAssociated combos and style variants"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"shadow: false, scoped: true"})," with assetsDirs/formAssociated and styles"]}),`
`,e.jsxs(n.li,{children:["styles-only for ",e.jsx(n.code,{children:"shadow: true, scoped: false"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["+20 permutations for ",e.jsx(n.code,{children:"shadow: false, scoped: true"})," plus ",e.jsx(n.code,{children:"scoped: false"})," assetsDirs/formAssociated combos."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Used the repo’s ",e.jsx(n.code,{children:".ai"})," testing scripts to regenerate coverage after each batch."]}),`
`]}),`
`,e.jsx(n.h3,{id:"coverage-progress",children:"Coverage Progress"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Baseline: 82/216 (38.0%)."}),`
`,e.jsx(n.li,{children:"After batch 1: 102/216 (47.2%)."}),`
`,e.jsx(n.li,{children:"After batch 2: 122/216 (56.5%)."}),`
`,e.jsxs(n.li,{children:["Verified file count matches coverage: 122 ",e.jsx(n.code,{children:".tsx"})," files under ",e.jsx(n.code,{children:"test/wdio/component-decorator/**"})," equals ",e.jsx(n.code,{children:"covered = 122"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"rules--conventions",children:"Rules & Conventions"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Mutual exclusivity is enforced by the coverage script; any component with more than one style property is skipped."}),`
`,e.jsxs(n.li,{children:["Options order for permutation keys: ",e.jsx(n.code,{children:"[shadow, scoped, assetsDirs, formAssociated, styleUrl, styleUrls, styles]"})," with values ",e.jsx(n.code,{children:"✓ | ✗ | -"}),"."]}),`
`,e.jsxs(n.li,{children:["Valid style states: ",e.jsx(n.code,{children:"[✓,-,-]"}),", ",e.jsx(n.code,{children:"[-,✓,-]"}),", ",e.jsx(n.code,{children:"[-,-,✓]"}),", or ",e.jsx(n.code,{children:"[-,-,-]"}),"."]}),`
`,e.jsxs(n.li,{children:["Location: ",e.jsx(n.code,{children:"test/wdio/component-decorator/matrix/"})," only for new permutations."]}),`
`,e.jsxs(n.li,{children:["Naming: ",e.jsx(n.code,{children:"component-<shadow|shadow-false>-<scoped|scoped-false>-<assetsdirs?>-<formassociated|formassociated-false?>-<styleurl|styleurls|styles?>.tsx"})," (omit segments that are ",e.jsx(n.code,{children:"-"}),")."]}),`
`,e.jsxs(n.li,{children:["Tag equals filename (without extension). Render includes a ",e.jsx(n.code,{children:"Permutation: ..."})," string matching the seven-field key to aid audits."]}),`
`]}),`
`,e.jsx(n.h3,{id:"model-usage",children:"Model Usage"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use GPT-5 (Preview) for code generation of components."}),`
`,e.jsx(n.li,{children:"Use GPT-4.1 for documentation authoring and maintenance."}),`
`]}),`
`,e.jsx(n.h3,{id:"next-steps",children:"Next Steps"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Accept newly created files in the UI."}),`
`,e.jsxs(n.li,{children:["Continue generating the next batches by reading ",e.jsx(n.code,{children:"missingPermutations"})," from ",e.jsx(n.code,{children:"Testing/Decorators/Component/coverage-data.json"})," and creating exactly one component per missing key."]}),`
`,e.jsxs(n.li,{children:["Re-run coverage after each batch and ensure file count equals ",e.jsx(n.code,{children:"covered"}),"."]}),`
`,e.jsxs(n.li,{children:["Update this audit and the ",e.jsx(n.code,{children:"@Component"})," decorator docs as the workflow evolves."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"2025-09-08-context-first-strategy-gpt-5-results-and-portability-vision",children:"2025-09-08: Context-First Strategy, GPT-5 Results, and Portability Vision"}),`
`,e.jsx(n.h3,{id:"summary-1",children:"Summary"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Hypothesis validated: investing in the .ai context (standards, coverage scripts, docs, prompts) yields outsized returns versus hand-writing components/tests. As models improve, high-fidelity code and docs follow naturally from a strong context."}),`
`,e.jsxs(n.li,{children:["GPT-5 (Preview) materially outperforms GPT-4.1 on this repo:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Accurately scanned the .ai folder, updated the correct ",e.jsx(n.code,{children:"audit.mdx"}),", and authored a high-quality ",e.jsx(n.code,{children:"decorators/component.mdx"})," with minimal prompting."]}),`
`,e.jsx(n.li,{children:"Generated components from the coverage matrix more reliably and with better adherence to conventions."}),`
`,e.jsx(n.li,{children:"Produced stronger documentation with simpler prompts."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"why-this-matters",children:"Why this matters"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The testing loop hinges on a trustworthy coverage matrix. AI uses the matrix to: (1) enumerate missing permutations, (2) generate components, and next (3) generate tests. When the sample set fully represents all permutations, test coverage meaningfully guards compiler/runtime changes."}),`
`,e.jsx(n.li,{children:"This enables crowdsourcing: contributors can ask AI to add the next missing permutations/tests and submit PRs—guided by the shared context."}),`
`]}),`
`,e.jsx(n.h3,{id:"portability-the-ai-context-pack",children:"Portability: the .ai Context Pack"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Goal: make ",e.jsx(n.code,{children:".ai"}),' a portable, framework-agnostic "Context Pack" others can import into any repo.']}),`
`,e.jsxs(n.li,{children:["Adaptation model:",`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Drop the ",e.jsx(n.code,{children:".ai"})," folder into a target repo."]}),`
`,e.jsxs(n.li,{children:["Update ",e.jsx(n.code,{children:"project-config.mdx"})," to align with local tech (unit/component/e2e frameworks, runners, scripts)."]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:".ai/testing/package.json"})," script shortcuts to normalize paths and execution."]}),`
`,e.jsx(n.li,{children:"Run coverage to discover missing permutations; generate components/tests accordingly."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Always reference ",e.jsx(n.code,{children:"AGENT_KEYWORDS.md"})," for standardized agent keywords and prompt conventions."]}),`
`]}),`
`,e.jsx(n.h3,{id:"concrete-outcomes-observed-today",children:"Concrete outcomes observed today"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["GPT-5 authored a high-signal audit entry and created ",e.jsx(n.code,{children:"decorators/component.mdx"})," that formalizes the ",e.jsx(n.code,{children:"@Component"})," permutation strategy (naming, exclusivity, workflow)."]}),`
`,e.jsx(n.li,{children:"Component generation quality improved and aligned with the matrix rules, enabling the next step (test generation) with confidence."}),`
`]}),`
`,e.jsx(n.h3,{id:"vision-universal-framework-agnostic-genai-testing",children:"Vision: Universal, framework-agnostic GenAI testing"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Maintain source-of-truth coverage scripts and matrices in ",e.jsx(n.code,{children:".ai"}),"."]}),`
`,e.jsxs(n.li,{children:["Make context-first workflows portable via ",e.jsx(n.code,{children:"project-config.mdx"})," and script shortcuts."]}),`
`,e.jsx(n.li,{children:"Encourage contributors to use GPT-5 with these artifacts to iteratively close coverage gaps and add tests."}),`
`]}),`
`,e.jsx(n.h3,{id:"risks-and-mitigations",children:"Risks and mitigations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Risk: context drift between repos. Mitigation: version the Context Pack, document required local overrides in ",e.jsx(n.code,{children:"project-config.mdx"}),', and run a quick "context sanity" script before generation.']}),`
`,e.jsx(n.li,{children:"Risk: false confidence from incomplete matrices. Mitigation: manual verification steps and regular audits (see Manual Verification of Coverage Matrix above)."}),`
`]}),`
`,e.jsx(n.h3,{id:"next-actions",children:"Next actions"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:['Add a dedicated "Context Pack" guide with import/setup steps (created in ',e.jsx(n.code,{children:".ai/testing/context-pack.mdx"}),")."]}),`
`,e.jsxs(n.li,{children:["Cross-link the guide from ",e.jsx(n.code,{children:"overview.mdx"})," and ",e.jsx(n.code,{children:"project-config.mdx"})," in a future pass."]}),`
`,e.jsxs(n.li,{children:["Prefer GPT-5 (Preview) for generation; GPT-4.1 for documentation, as currently noted in ",e.jsx(n.code,{children:"decorators/component.mdx"}),"."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"recording-learnings",children:"Recording Learnings"}),`
`,e.jsxs(n.p,{children:["For every completed GenAI-powered testing loop, ensure that all learnings, mistakes, and improvements are documented in the relevant ",e.jsx(n.code,{children:".ai"})," folder file and summarized here in the audit log. This practice helps maintain a robust knowledge base and supports continuous improvement for future contributors."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"2025-10-09-decorator-folder-convention-and-nodrift-workflow",children:"2025-10-09: Decorator Folder Convention and No‑Drift Workflow"}),`
`,e.jsx(n.h3,{id:"summary-2",children:"Summary"}),`
`,e.jsxs(n.p,{children:["We standardized a per‑decorator folder convention under ",e.jsx(n.code,{children:"Testing/Decorators/<Decorator>/"})," and aligned docs, generation, and verification to eliminate drift and make the workflow portable across all decorators."]}),`
`,e.jsx(n.h3,{id:"convention-applies-to-every-decorator",children:"Convention (applies to every decorator)"}),`
`,e.jsx(n.p,{children:"Each decorator now has a dedicated subfolder with the same files/scripts:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"@<Decorator>.mdx"})," — Storybook docs page"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"rules.json"})," — single source of truth for valid options, exclusivity, grouping (modes), naming"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"generate-components.js"})," — emits one component per valid permutation under the WDIO matrix folder"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"coverage.js"})," — computes Phase 1 compile coverage and writes ",e.jsx(n.code,{children:"coverage-data.json"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"coverage-data.json"})," — compile coverage summary and file lists consumed by docs/verify"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"coverage-overlay.json"})," — Phase 2 test overlay (tested/testedBy/group), built by ",e.jsx(n.code,{children:"verify-matrix"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"docs-integration",children:"Docs integration"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"RulesAtAGlance"})," renders ",e.jsx(n.code,{children:"rules.json"})," directly to prevent drift (with ",e.jsx(n.code,{children:"modeLabel"})," support for non‑Component decorators)."]}),`
`,e.jsx(n.li,{children:"Section order standardized: 1) Decorator Properties, 2) Rules (at a glance), 3) Generated Components, 4) Component Grouping, 5) Test Cases."}),`
`,e.jsx(n.li,{children:"Terminology standardized: “Generated Components” replaces “matrix”."}),`
`,e.jsx(n.li,{children:"Phase 1 note (“compile‑only”) included; Phase 2 columns are placeholders until tests are propagated."}),`
`]}),`
`,e.jsx(n.h3,{id:"verify-pipeline",children:"Verify pipeline"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"verify-matrix.js"})," re‑runs coverage, checks parity (covered === total and ",e.jsx(n.code,{children:".tsx"})," count), validates grouping from ",e.jsx(n.code,{children:"rules.modes"}),", enforces exclusivity, and builds the per‑decorator ",e.jsx(n.code,{children:"coverage-overlay.json"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"run-all-coverage.js"})," refreshes coverage for all decorators."]}),`
`]}),`
`,e.jsx(n.h3,{id:"status",children:"Status"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Adopted for: ",e.jsx(n.code,{children:"@Component"}),", ",e.jsx(n.code,{children:"@State"}),"."]}),`
`,e.jsxs(n.li,{children:["Cleanup: removed ",e.jsx(n.code,{children:"State/compare-legacy.js"})," (migration helper no longer needed)."]}),`
`,e.jsxs(n.li,{children:["Next: align ",e.jsx(n.code,{children:"@Prop"}),", ",e.jsx(n.code,{children:"@Event"}),", ",e.jsx(n.code,{children:"@Listen"}),", ",e.jsx(n.code,{children:"@Method"})," to this convention; add optional CI rule to validate schema and prevent drift."]}),`
`]}),`
`,e.jsx(n.h3,{id:"why-this-matters-1",children:"Why this matters"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Predictable structure enables automation (generation, verification, documentation) per decorator."}),`
`,e.jsxs(n.li,{children:["Rendering rules from ",e.jsx(n.code,{children:"rules.json"})," removes manual duplication and drift."]}),`
`,e.jsxs(n.li,{children:["Makes the ",e.jsx(n.code,{children:".ai"})," Context Pack portable; contributors can follow the same pattern for new decorators/features."]}),`
`]})]})}function x(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{x as default};
