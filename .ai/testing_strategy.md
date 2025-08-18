# Stencil.js Testing Strategy

This document outlines the testing strategy for the Stencil.js codebase, focusing on a robust and maintainable approach to ensure the quality and stability of the framework.

## Philosophy

For a foundational library like Stencil, the testing strategy must be rigorous. It should not only validate that features work as expected but also ensure they are reliable in isolation and play well with others. We follow a model inspired by the classic testing pyramid.

A key aspect of our strategy is recognizing the difference between **static coverage analysis** and **runtime behavior testing**. Our coverage scripts work by statically analyzing the source code for specific patterns (e.g., the presence of a `@Prop` decorator with certain options). This is a fast and effective way to inventory our features, but it does not execute the code to verify its behavior. Therefore, our testing strategy is designed to satisfy both our static analysis tools and the need for robust, behavior-driven validation.

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

By adhering to this strategy, we build a comprehensive test suite that is both robust and maintainable, ensuring that Stencil remains a reliable tool for developers.
