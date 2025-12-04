import { $, expect, browser } from '@wdio/globals';
import { h, Fragment } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';

describe('@Method decorator', () => {
  before(async () => {
    render({
      components: [],
      template: () => (
        <Fragment>
          {/* promise */}
          <method-promise-async-false-args-none></method-promise-async-false-args-none>
          <method-promise-async-false-args-one></method-promise-async-false-args-one>
          <method-promise-async-true-args-none></method-promise-async-true-args-none>
          <method-promise-async-true-args-one></method-promise-async-true-args-one>

          {/* value */}
          <method-value-async-true-args-none></method-value-async-true-args-none>
          <method-value-async-true-args-one></method-value-async-true-args-one>

          {/* void */}
          <method-void-async-true-args-none></method-void-async-true-args-none>
          <method-void-async-true-args-one></method-void-async-true-args-one>
        </Fragment>
      ),
    });
  });

  describe('Test Case #1 – Promise methods', () => {
    describe('method-promise-async-true-args-none', () => {
      it('renders host element and exposes run() returning a promise', async () => {
        const host = await $('method-promise-async-true-args-none');
        await host.waitForExist();

        const result = await (browser as any).execute(
          function (selector: string) {
            const element = document.querySelector(selector) as any;
            if (!element) {
              return { exists: false, hasMethod: false, returnsPromise: false };
            }

            const run = element.run;
            if (typeof run !== 'function') {
              return { exists: true, hasMethod: false, returnsPromise: false };
            }

            const invocation = run.apply(element, []);
            const isPromise = !!invocation && typeof invocation.then === 'function';

            return { exists: true, hasMethod: true, returnsPromise: isPromise };
          },
          'method-promise-async-true-args-none'
        );

        expect(result.exists).toBe(true);
        expect(result.hasMethod).toBe(true);
        expect(result.returnsPromise).toBe(true);
      });

      it('updates #counter after the promise resolves', async () => {
        const host = await $('method-promise-async-true-args-none');
        await host.waitForExist();

        const counter = await host.$('#counter');
        await counter.waitForExist();

        // Component calls the method in componentDidLoad, so counter may already be updated
        await (browser as any).waitUntil(async () => {
          const currentValue = await counter.getText();
          return currentValue === '1';
        }, { timeout: 3000 });

        expect(await counter.getText()).toBe('1');
      });
    });

    describe('method-promise-async-true-args-one', () => {
      it('renders host element and exposes run() returning a promise', async () => {
        const host = await $('method-promise-async-true-args-one');
        await host.waitForExist();

        const result = await (browser as any).execute(
          function (selector: string) {
            const element = document.querySelector(selector) as any;
            if (!element) {
              return { exists: false, hasMethod: false, returnsPromise: false };
            }

            const run = element.run;
            if (typeof run !== 'function') {
              return { exists: true, hasMethod: false, returnsPromise: false };
            }

            const invocation = run.apply(element, [2]);
            const isPromise = !!invocation && typeof invocation.then === 'function';

            return { exists: true, hasMethod: true, returnsPromise: isPromise };
          },
          'method-promise-async-true-args-one'
        );

        expect(result.exists).toBe(true);
        expect(result.hasMethod).toBe(true);
        expect(result.returnsPromise).toBe(true);
      });

      it('updates #counter after the promise resolves', async () => {
        const host = await $('method-promise-async-true-args-one');
        await host.waitForExist();

        const counter = await host.$('#counter');
        await counter.waitForExist();

        // Component calls run(1) in componentDidLoad, so counter may already be updated
        await (browser as any).waitUntil(async () => {
          const currentValue = await counter.getText();
          return currentValue === '1';
        }, { timeout: 3000 });

        expect(await counter.getText()).toBe('1');
      });
    });

    describe('method-promise-async-false-args-none', () => {
      it('renders host element and exposes run() returning a promise', async () => {
        const host = await $('method-promise-async-false-args-none');
        await host.waitForExist();

        const result = await (browser as any).execute(
          function (selector: string) {
            const element = document.querySelector(selector) as any;
            if (!element) {
              return { exists: false, hasMethod: false, returnsPromise: false };
            }

            const run = element.run;
            if (typeof run !== 'function') {
              return { exists: true, hasMethod: false, returnsPromise: false };
            }

            const invocation = run.apply(element, []);
            const isPromise = !!invocation && typeof invocation.then === 'function';

            return { exists: true, hasMethod: true, returnsPromise: isPromise };
          },
          'method-promise-async-false-args-none'
        );

        expect(result.exists).toBe(true);
        expect(result.hasMethod).toBe(true);
        expect(result.returnsPromise).toBe(true);
      });

      it('updates #counter after the promise resolves', async () => {
        const host = await $('method-promise-async-false-args-none');
        await host.waitForExist();

        const counter = await host.$('#counter');
        await counter.waitForExist();

        // Component calls the method in componentDidLoad, so counter may already be updated
        await (browser as any).waitUntil(async () => {
          const currentValue = await counter.getText();
          return currentValue === '1';
        }, { timeout: 3000 });

        expect(await counter.getText()).toBe('1');
      });
    });

    describe('method-promise-async-false-args-one', () => {
      it('renders host element and exposes run() returning a promise', async () => {
        const host = await $('method-promise-async-false-args-one');
        await host.waitForExist();

        const result = await (browser as any).execute(
          function (selector: string) {
            const element = document.querySelector(selector) as any;
            if (!element) {
              return { exists: false, hasMethod: false, returnsPromise: false };
            }

            const run = element.run;
            if (typeof run !== 'function') {
              return { exists: true, hasMethod: false, returnsPromise: false };
            }

            const invocation = run.apply(element, [2]);
            const isPromise = !!invocation && typeof invocation.then === 'function';

            return { exists: true, hasMethod: true, returnsPromise: isPromise };
          },
          'method-promise-async-false-args-one'
        );

        expect(result.exists).toBe(true);
        expect(result.hasMethod).toBe(true);
        expect(result.returnsPromise).toBe(true);
      });

      it('updates #counter after the promise resolves', async () => {
        const host = await $('method-promise-async-false-args-one');
        await host.waitForExist();

        const counter = await host.$('#counter');
        await counter.waitForExist();

        // Component calls run(1) in componentDidLoad, so counter may already be updated
        await (browser as any).waitUntil(async () => {
          const currentValue = await counter.getText();
          return currentValue === '1';
        }, { timeout: 3000 });

        expect(await counter.getText()).toBe('1');
      });
    });
  });

  describe('Test Case #2 – Value methods', () => {
    it('renders value async=true args=none and provides immediate result', async () => {
      const cmp = await $('method-value-async-true-args-none');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: returns=value async=true args=none');
      await expect(cmp.$('#counter')).toHaveText('1');
    });

    it('renders value async=true args=one and provides immediate result', async () => {
      const cmp = await $('method-value-async-true-args-one');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: returns=value async=true args=one');
      await expect(cmp.$('#counter')).toHaveText('1');
    });
  });

  describe('Test Case #3 – Void methods', () => {
    it('renders void async=true args=none with side effects', async () => {
      const cmp = await $('method-void-async-true-args-none');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: returns=void async=true args=none');
      await expect(cmp.$('#counter')).toHaveText('1');
    });

    it('renders void async=true args=one with side effects', async () => {
      const cmp = await $('method-void-async-true-args-one');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: returns=void async=true args=one');
      await expect(cmp.$('#counter')).toHaveText('1');
    });
  });
});
