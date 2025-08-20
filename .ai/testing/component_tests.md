# Component-Level Tests (`test/wdio`)

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

## Running Component Tests

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
