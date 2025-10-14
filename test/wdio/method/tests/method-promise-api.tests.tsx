import { $, browser } from '@wdio/globals';
import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';

const promiseComponents: Array<{ tag: string; callArgs: unknown[]; expectedCounter: string }> = [
  { tag: 'method-promise-async-none', callArgs: [], expectedCounter: '1' },
  { tag: 'method-promise-async-one', callArgs: [2], expectedCounter: '2' },
  { tag: 'method-promise-async-false-none', callArgs: [], expectedCounter: '1' },
  { tag: 'method-promise-async-false-one', callArgs: [2], expectedCounter: '2' }
];

describe('method decorator promise components', () => {
  for (const component of promiseComponents) {
    describe(component.tag, () => {
      beforeEach(async () => {
        render({
          components: [],
          template: () => h(component.tag as any, null)
        });
      });

      it('renders host element and exposes run() returning a promise', async () => {
        const host = await $(component.tag);
        await host.waitForExist();

        const result = await (browser as any).execute(
          function (selector: string, args: unknown[]) {
            const element = document.querySelector(selector) as any;
            if (!element) {
              return { exists: false, hasMethod: false, returnsPromise: false };
            }

            const run = element.run;
            if (typeof run !== 'function') {
              return { exists: true, hasMethod: false, returnsPromise: false };
            }

            const invocation = run.apply(element, Array.isArray(args) ? args : []);
            const isPromise = !!invocation && typeof invocation.then === 'function';

            return { exists: true, hasMethod: true, returnsPromise: isPromise };
          },
          component.tag,
          component.callArgs
        );

        expect(result.exists).toBe(true);
        expect(result.hasMethod).toBe(true);
        expect(result.returnsPromise).toBe(true);
      });

      it('updates #counter after the promise resolves', async () => {
        const host = await $(component.tag);
        await host.waitForExist();

        const counter = await host.$('#counter');
        await counter.waitForExist();

        expect(await counter.getText()).toBe('0');

        await browser.waitUntil(async () => {
          return (await counter.getText()) === component.expectedCounter;
        }, { timeout: 3000 });

        expect(await counter.getText()).toBe(component.expectedCounter);
      });
    });
  }
});
