# Stencil.js Testing Strategy

This document outlines the testing strategy for the Stencil.js codebase, centered around a GenAI-powered loop. This iterative process involves:
1. Defining all feature permutations in a machine and human-readable format.
2. Using AI to generate tests that cover these permutations.
3. Running the generated tests to ensure they are functionally correct.
4. Analyzing the code to update a coverage matrix, identifying any gaps.
5. Refining and regenerating tests to address any uncovered permutations until 100% coverage is achieved.

This ensures a comprehensive and robust testing suite that is both maintainable and scalable.

## Philosophy

For a foundational library like Stencil, the testing strategy must be rigorous. It should not only validate that features work as expected but also ensure they are reliable in isolation and play well with others. We follow a model inspired by the classic testing pyramid.

A key aspect of our strategy is recognizing the difference between **static coverage analysis** and **runtime behavior testing**. Our coverage scripts work by statically analyzing the source code for specific patterns (e.g., the presence of a `@Prop` decorator with certain options). This is a fast and effective way to inventory our features, but it does not execute the code to verify its behavior. Therefore, our testing strategy is designed to satisfy both our static analysis tools and the need for robust, behavior-driven validation.

## The GenAI-Powered Testing Loop

A groundbreaking aspect of our testing strategy is its reliance on a GenAI-powered iterative loop. This approach allows us to systematically work towards 100% coverage of all feature permutations in a way that is both dynamic and self-improving. The loop is as follows:

1.  **Study & Document Permutations**: For a given feature, like a decorator, we first study all its possible variations and options. These are documented in a human- and machine-readable permutation matrix within an `.mdx` file. This matrix serves as the single source of truth for what needs to be tested.
2.  **AI-Driven Test Generation**: A generative AI assistant uses the permutation matrix as a blueprint to generate the necessary tests. It creates a combination of isolated component-level tests (`test/wdio`) and integration tests (`test/end-to-end`) to exercise every permutation defined in the matrix.
3.  **Test Execution and Validation**: Before checking coverage, the newly generated `wdio` tests are run to ensure they pass. This step is critical to confirm that the generated components and tests are functionally correct and adhere to the established patterns in the `wdio` directory.
4.  **Coverage Analysis & Matrix Update**: After the tests are generated and pass, a custom coverage script analyzes the results. It updates the permutation matrix `.mdx` file with the latest coverage statistics, clearly marking which permutations are successfully tested and which are missing.
5.  **Iterate and Refine**: The AI reviews the updated matrix. If any permutations are uncovered, it refines the existing tests or generates new ones to cover the gaps. This loop continues until all permutations in the matrix are covered, ensuring our test suite is as comprehensive as possible.

This iterative process allows us to not only achieve but also maintain high test coverage over time, adapting as new features and variations are introduced.

### A Real-World Example: The `@Prop` Decorator

Our first application of this strategy to the `@Prop` decorator provides a perfect case study of the iterative process in action and highlights the exponential cost of comprehensive testing.

1.  **Initial Coverage Push**: We began by identifying the primary permutations for `@Prop`, focusing on its `type` (e.g., `string`, `number`, `boolean`) and the `reflect` option. The AI assistant generated a suite of isolated component tests in `test/wdio/prop-reflect/` to cover these cases. After this initial push, our coverage script reported **100% coverage** for the known permutations.

2.  **Discovering a Blind Spot**: Upon review, we realized we had completely overlooked the `mutable` property. It was not being tracked by our coverage script, giving us a false sense of security.

3.  **The Cost of a New Permutation**: We updated the `prop-coverage.js` script to recognize the `mutable` property. The impact was immediate and dramatic. The total number of testable permutations doubled, and our coverage plummeted from **100% to 62.5%**. This demonstrated a critical lesson: each new property added to a feature doesn't just add a few more tests; it can exponentially increase the testing matrix.

4.  **The Next Iteration**: We are now back at the beginning of the testing loop, but we are not starting from scratch. With a more accurate permutation matrix, we will now use the same strategy—and the lessons learned from the first iteration—to generate the tests required to cover the new `mutable` permutations and bring our coverage back to 100%.

This experience validates our strategy. The loop is designed to be self-correcting. It allows us to uncover our own blind spots, systematically address them, and continuously improve the robustness of our test suite.

### Key Learnings from the `@Prop` Implementation

The process of testing the `@Prop` decorator, particularly the discovery of the `mutable` property after an initial focus on `reflect`, provided several critical insights that now form the bedrock of our testing philosophy:

1.  **Static Analysis Creates Blind Spots**: Our initial 100% coverage metric was misleading because the coverage script was not programmed to look for the `mutable` property. This taught us that our static analysis tools are only as good as the patterns they are configured to find. It highlights the need for human oversight to question the results and identify what might be missing.

2.  **The Exponential Cost of Comprehensive Testing**: Adding a single boolean property (`mutable`) to the `@Prop` decorator doubled the size of our permutation matrix. This was a stark reminder that the cost of testing does not grow linearly; it grows exponentially with each new feature option. This underscores the need for an efficient and scalable testing strategy to manage this complexity.

3.  **The Value of a Self-Correcting Loop**: The GenAI-powered testing loop proved its worth. When we discovered the `mutable` property, the process didn't break. We simply updated the coverage script (the source of truth), and the loop naturally guided us to the next step: generating the missing tests. This iterative, self-correcting nature is what makes the strategy resilient and sustainable.

4.  **Isolated Tests are Foundational**: The `test/wdio` approach of using small, single-purpose components for each permutation was highly effective. It resulted in tests that were simple to write, easy to debug, and perfectly compatible with our static analysis tools. This "one feature, one component" approach is a core principle for building our foundational test layer.

5.  **Human-AI Collaboration is Key**: This entire process was a partnership. The AI was a powerful engine for generating code and executing the testing loop, but human insight was required to identify the initial blind spot (`mutable`) and refine the strategy. The most effective approach is one that leverages AI for speed and scale while relying on human expertise for critical thinking and direction.

## An Open, Community-Driven Framework

While the concept of a GenAI-powered testing loop is powerful, its true potential is unlocked through community collaboration. We envision this testing strategy as a public project, open to contributions from everyone.

The framework is designed to be model-agnostic. Anyone, whether they have access to cutting-edge proprietary AI or open-source models, can participate. The process is simple:

1.  Fork the repository.
2.  Run the testing loop using your preferred AI model.
3.  If your model generates new, more efficient, or more comprehensive tests, submit a pull request.

This approach allows us to harness the collective intelligence and diverse capabilities of the entire community. By crowdsourcing the test generation process, we can build a more robust, resilient, and thoroughly-vetted testing suite than any single team or model could create alone.

## Testing Tiers

### 1. Component-Level Tests (`test/wdio`)

-   **Purpose:** To test the functionality of individual components or features in perfect isolation. These are our "unit tests" for component behavior.
-   **Technology:** WebdriverIO (WDIO) is the primary framework, utilizing the `@wdio/browser-runner/stencil` for efficient in-browser component rendering and interaction.
-   **Scope:**
    -   Focus on a single feature or permutation at a time. For example, when testing `@Prop({ reflect: true })`, there should be separate, isolated tests for `boolean`, `number`, `string`, `Array`, `Object`, and `Set` types.
    -   Each test should use its own dedicated component to ensure no interference from other properties or features. This is critical for compatibility with our static analysis tools, which rely on finding these features in isolation.
-   **Benefits:**
    -   **Precision:** Tests are clear, targeted, and unambiguous.
    -   **Debugging:** Failures are easy to pinpoint to a specific feature.
    -   **Robustness:** Guarantees that each feature works correctly on its own, forming a reliable foundation.
    -   **Tooling Compatibility:** This approach works well with static analysis-based coverage tools.

### 2. End-to-End Tests (`test/end-to-end`)

-   **Purpose:** To test the integration of multiple features and components working together. These tests simulate more complex, real-world scenarios.
-   **Technology:** Stencil's built-in `newE2EPage()` test utility, which leverages Puppeteer to control a headless browser for simulating user interactions.
-   **Scope:**
    -   Test how different features interact. For example, a single page could host multiple components, each with different combinations of reflected properties, event listeners, and methods.
    -   Simulate user flows and interactions between components.
    -   Verify that features that work in isolation do not have negative side effects when combined.
-   **Benefits:**
    -   **Confidence:** Ensures that the framework is stable when used in complex applications.
    -   **Real-World Validation:** Tests scenarios that are closer to how developers will actually use Stencil.

## Summary: The Testing Pyramid in Practice

| Test Type             | Directory         | Technology                                           | Goal                                                              |
| --------------------- | ----------------- | ---------------------------------------------------- | ----------------------------------------------------------------- |
| **Component Tests**   | `test/wdio/`      | WebdriverIO (`@wdio/browser-runner/stencil`)         | Verify individual features in isolation and satisfy static analysis.    |
| **Integration Tests** | `test/end-to-end/` | Stencil's `newE2EPage()` (Puppeteer)                 | Verify that multiple features work correctly when used together. |

### Running Component Tests

To run the component-level tests located in the `test/wdio` directory, follow these steps:

1.  **Navigate to the `wdio` test directory**:
    ```bash
    cd test/wdio
    ```
2.  **Update the test configuration**: Open the `wdio.conf.ts` file.
3.  **Specify the test file**: Locate the `specs` array within the configuration file and update it to point to the specific test file(s) you want to run. For example:
    ```typescript
    // ...
    specs: [['./prop-mutable/**/*.test.tsx']],
    // ...
    ```
4.  **Run the tests**: Execute the following command in your terminal:
    ```bash
    npm run wdio
    ```

This will launch the WebdriverIO test runner and execute the specified tests.

## Continuous Improvement

This testing strategy is a living document. We will continue to refine our approach, adopt new tools, and improve our processes over time to ensure Stencil remains a reliable and high-quality framework for all developers.

As this is our first time implementing the GenAI-powered loop, we anticipate a learning period where mistakes are possible. Our commitment is to learn from these experiences and rapidly evolve towards a rock-solid automated testing framework.

By adhering to this strategy, we build a comprehensive test suite that is both robust and maintainable, ensuring that Stencil remains a reliable tool for developers.
