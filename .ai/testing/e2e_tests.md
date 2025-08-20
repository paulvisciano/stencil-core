# End-to-End Tests (`test/end-to-end`)

-   **Purpose:** To test the integration of multiple features and components working together. These tests simulate more complex, real-world scenarios.
-   **Technology:** Stencil's built-in `newE2EPage()` test utility, which leverages Puppeteer to control a headless browser for simulating user interactions.
-   **Scope:**
    -   Test how different features interact. For example, a single page could host multiple components, each with different combinations of reflected properties, event listeners, and methods.
    -   Simulate user flows and interactions between components.
    -   Verify that features that work in isolation do not have negative side effects when combined.
-   **Benefits:**
    -   **Confidence:** Ensures that the framework is stable when used in complex applications.
    -   **Real-World Validation:** Tests scenarios that are closer to how developers will actually use Stencil.

## Running End-to-End Tests

To run the end-to-end tests, you can use the following command:

```bash
npm test -- --e2e
```

To run a specific test file, you can pass the file path as an argument:

```bash
npm test -- --e2e test/end-to-end/my-test.e2e.ts
```
