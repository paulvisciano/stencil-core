# Stencil.js Testing Strategy

This document outlines the testing strategy for the Stencil.js codebase, centered around a GenAI-powered loop. This ensures a comprehensive and robust testing suite that is both maintainable and scalable.

## Philosophy

For a foundational library like Stencil, the testing strategy must be rigorous. It should not only validate that features work as expected but also ensure they are reliable in isolation and play well with others. We follow a model inspired by the classic testing pyramid.

A key aspect of our strategy is recognizing the difference between **static coverage analysis** and **runtime behavior testing**. Our coverage scripts work by statically analyzing the source code for specific patterns (e.g., the presence of a `@Prop` decorator with certain options). This is a fast and effective way to inventory our features, but it does not execute the code to verify its behavior. Therefore, our testing strategy is designed to satisfy both our static analysis tools and the need for robust, behavior-driven validation.

## The GenAI-Powered Testing Loop

A groundbreaking aspect of our testing strategy is its reliance on a GenAI-powered iterative loop. This approach allows us to systematically work towards 100% coverage of all feature permutations in a way that is both dynamic and self-improving. The loop is as follows:

1.  **Define Component Permutations**: For a given feature, like a decorator, we first study all its possible variations and options. These are documented in a human- and machine-readable permutation matrix within an `.mdx` file. This matrix serves as the single source of truth for which component permutations need to be tested.
2.  **AI-Driven Component Test Generation**: A generative AI assistant uses the permutation matrix as a blueprint to generate the necessary component-level tests in the `test/wdio` directory. For each permutation, it creates an isolated component and a corresponding test to exercise its behavior.
3.  **Test Execution and Validation**: Before checking coverage, the newly generated `wdio` tests are run to ensure they pass. This step is critical to confirm that the generated components and tests are functionally correct and adhere to the established patterns.
4.  **Coverage Analysis & Matrix Update**: After the tests are generated and pass, a custom coverage script analyzes the codebase. It updates the permutation matrix `.mdx` file with the latest coverage statistics, clearly marking which component permutations are implemented and tested, and which are missing.
5.  **Iterate and Refine**: The AI reviews the updated matrix. If any permutations are uncovered, it generates the missing components and tests to cover the gaps. This loop continues until all permutations in the matrix are covered, ensuring our test suite is as comprehensive as possible.
6.  **Document Learnings**: Once 100% coverage is achieved, the AI documents any learnings from the testing iteration in the appropriate `.ai` folder files. This includes mistakes made during test generation, loopholes discovered in coverage scripts, improvements to documentation, and any patterns or best practices identified. This step ensures that each iteration builds upon the knowledge gained from previous cycles, making the process continuously more efficient and accurate.

This iterative process allows us to not only achieve but also maintain high test coverage over time, adapting as new features and variations are introduced while continuously improving our methodology.

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

Our testing strategy is divided into two main tiers:

- [Component-Level Tests](./component_tests.md)
- [End-to-End Tests](./e2e_tests.md)

For a detailed explanation of how the permutation matrices are generated, see the [Matrix Generation Guide](./matrix_generation.md).

## Summary: The Testing Pyramid in Practice

| Test Type             | Directory         | Technology                                           | Goal                                                              |
| --------------------- | ----------------- | ---------------------------------------------------- | ----------------------------------------------------------------- |
| **Component Tests**   | `test/wdio/`      | WebdriverIO (`@wdio/browser-runner/stencil`)         | Verify individual features in isolation and satisfy static analysis.    |
| **Integration Tests** | `test/end-to-end/` | Stencil's `newE2EPage()` (Puppeteer)                 | Verify that multiple features work correctly when used together. |

## Continuous Improvement

This testing strategy is a living document. We will continue to refine our approach, adopt new tools, and improve our processes over time to ensure Stencil remains a reliable and high-quality framework for all developers.

A core tenet of this continuous improvement is the practice of documenting our learnings. After each major testing iteration, we will update the relevant documentation—including this strategy, the component-level and end-to-end testing guides, and the [audit log](./audit.md)—with any new insights, patterns, or challenges we encountered. This ensures that our institutional knowledge grows with our test suite.

**Key areas for learning documentation include:**

- **AI Mistakes and Corrections**: Recording instances where the AI generated incorrect or suboptimal tests, along with the corrections made
- **Coverage Script Gaps**: Documenting loopholes or blind spots discovered in coverage scripts and how they were addressed
- **Documentation Improvements**: Noting areas where guides or instructions were unclear or incomplete
- **Process Optimizations**: Capturing workflow improvements or shortcuts discovered during iterations
- **Pattern Recognition**: Identifying recurring themes or best practices that emerge from the testing process

As this is our first time implementing the GenAI-powered loop, we anticipate a learning period where mistakes are possible. Our commitment is to learn from these experiences and rapidly evolve towards a rock-solid automated testing framework.

By adhering to this strategy, we build a comprehensive test suite that is both robust and maintainable, ensuring that Stencil remains a reliable tool for developers.
