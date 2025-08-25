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

## File Naming and Location Conventions

-   **Test Directory:** All component-level tests are located in the `test/wdio` directory. Do not place these tests in the `src/components` directory.
-   **Component Suffix:** Test components must have a `-cmp` suffix in their filename (e.g., `my-feature-cmp.tsx`).
-   **Test File:** The test file for a component or a group of related components should be named `cmp.test.tsx`.

## Running Component Tests

To run the component-level tests located in the `test/wdio` directory, follow these steps:

1.  **Build the project**: Before running any tests, you must build the Stencil project from the root directory.
    ```bash
    npm run build
    ```
2.  **Navigate to the `wdio` test directory**:
    ```bash
    cd test/wdio
    ```
3.  **Build the `wdio` project**: Before running the tests, you need to build the test components.
    ```bash
    npm run build
    ```
4.  **Update the test configuration**: Open the `wdio.conf.ts` file.
5.  **Specify the test file**: Locate the `specs` array within the configuration file and update it to point to the specific test file(s) you want to run. For example:
    ```typescript
    // ...
    specs: [['./state/**/*.test.tsx']],
    // ...
    ```
6.  **Run the tests**: Execute the following command in your terminal:
    ```bash
    npm run wdio
    ```

This will launch the WebdriverIO test runner and execute the specified tests.

## A Guide to Writing and Running Component Tests

This guide outlines the complete workflow for creating and executing component-level tests in the `test/wdio` directory. Following these steps will help you contribute effectively to the project's test suite.

### Step 1: Establish a Baseline with the Coverage Script

Before writing any new tests, it's important to understand the current test coverage. A dedicated coverage script helps identify which permutations of a feature are already tested and which are missing.

To run the coverage script, use the following command:

```bash
cd test/storybook && npm run coverage
```

This command will analyze the existing test suite and generate a report, giving you a clear picture of where new tests are needed.

### Step 2: Generate Test Components

Once you've identified the missing test cases, the next step is to create the necessary test components. These components should be placed in the `test/wdio` directory and follow the established naming conventions.

### Step 3: Build the Test Components

After creating your test components, you need to build them. Navigate to the `wdio` test directory and run the build command:

```bash
cd test/wdio
npm run build
```

### Step 4: Write the Tests

With the components built, you can now write the tests. These tests should also be located in the `test/wdio` directory and should be written to verify the functionality of the components you've just created.

### Step 5: Run the Tests

To run the tests and ensure they pass, follow these steps:

1.  **Navigate to the `wdio` test directory** (if you're not already there):
    ```bash
    cd test/wdio
    ```
2.  **Update the test configuration**: Open the `wdio.conf.ts` file and modify the `specs` array to point to your test file(s). For example:
    ```typescript
    // ...
    specs: [['./state/**/*.test.tsx']],
    // ...
    ```
3.  **Run the tests**:
    ```bash
    npm run wdio
    ```

This will execute your tests and provide feedback on whether they pass or fail.

### Step 6: Document Learnings

After achieving 100% coverage, document any learnings from the testing process in the appropriate `.ai` folder files. This includes:

- **Mistakes made during test generation** and how they were corrected
- **Issues discovered in coverage scripts** and their fixes  
- **Improvements needed in documentation** or testing guides
- **Patterns or best practices** identified during the process

This documentation ensures that future testing iterations build upon the knowledge gained from this cycle.

## Best Practices

### Testing State Mutations

When testing how a component's state changes (e.g., when a `@Prop({ mutable: true })` is modified), it's crucial to verify the component's behavior before and after the change. A reliable pattern for this is:

1.  **Initial State Assertion:** Verify the initial state of the component's property.
2.  **User-like Interaction:** Trigger an action that should cause the state to change. This is typically a click on a button or another user-driven event.
3.  **Final State Assertion:** Verify that the property has been updated to the new, expected value.

This "before and after" approach ensures that the mutation is a direct result of the interaction and that the component behaves as expected.
