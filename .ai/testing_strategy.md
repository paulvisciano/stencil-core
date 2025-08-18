# Stencil.js Testing Strategy

This document outlines the testing strategy for the Stencil.js codebase, focusing on a robust and maintainable approach to ensure the quality and stability of the framework.

## Philosophy

For a foundational library like Stencil, the testing strategy must be rigorous. It should not only validate that features work as expected but also ensure they are reliable in isolation and play well with others. We follow a model inspired by the classic testing pyramid.

A key aspect of our strategy is recognizing the difference between **static coverage analysis** and **runtime behavior testing**. Our coverage scripts work by statically analyzing the source code for specific patterns (e.g., the presence of a `@Prop` decorator with certain options). This is a fast and effective way to inventory our features, but it does not execute the code to verify its behavior. Therefore, our testing strategy is designed to satisfy both our static analysis tools and the need for robust, behavior-driven validation.

## The GenAI-Powered Testing Loop

A groundbreaking aspect of our testing strategy is its reliance on a GenAI-powered iterative loop. This approach allows us to systematically work towards 100% coverage of all feature permutations in a way that is both dynamic and self-improving. The loop is as follows:

1.  **Study & Document Permutations**: For a given feature, like a decorator, we first study all its possible variations and options. These are documented in a human- and machine-readable permutation matrix within an `.mdx` file. This matrix serves as the single source of truth for what needs to be tested.
2.  **AI-Driven Test Generation**: A generative AI assistant uses the permutation matrix as a blueprint to generate the necessary tests. It creates a combination of isolated component-level tests (`test/wdio`) and integration tests (`test/end-to-end`) to exercise every permutation defined in the matrix.
3.  **Coverage Analysis & Matrix Update**: After the tests are generated and run, a custom coverage script analyzes the results. It updates the permutation matrix `.mdx` file with the latest coverage statistics, clearly marking which permutations are successfully tested and which are missing.
4.  **Iterate and Refine**: The AI reviews the updated matrix. If any permutations are uncovered, it refines the existing tests or generates new ones to cover the gaps. This loop continues until all permutations in the matrix are covered, ensuring our test suite is as comprehensive as possible.

This iterative process allows us to not only achieve but also maintain high test coverage over time, adapting as new features and variations are introduced.

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

## Continuous Improvement

This testing strategy is a living document. We will continue to refine our approach, adopt new tools, and improve our processes over time to ensure Stencil remains a reliable and high-quality framework for all developers.

As this is our first time implementing the GenAI-powered loop, we anticipate a learning period where mistakes are possible. Our commitment is to learn from these experiences and rapidly evolve towards a rock-solid automated testing framework.

By adhering to this strategy, we build a comprehensive test suite that is both robust and maintainable, ensuring that Stencil remains a reliable tool for developers.
