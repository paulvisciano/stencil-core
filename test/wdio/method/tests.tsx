import { $, expect } from '@wdio/globals';
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
    it('renders promise async=true args=none and updates counter after resolution', async () => {
      const cmp = await $('method-promise-async-true-args-none');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: returns=promise async=true args=none');
      await expect(cmp.$('#counter')).toHaveText('1');
    });

    it('renders promise async=false args=none and updates counter after resolution', async () => {
      const cmp = await $('method-promise-async-false-args-none');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: returns=promise async=false args=none');
      await expect(cmp.$('#counter')).toHaveText('1');
    });

    it('renders promise async=true args=one and updates counter after resolution', async () => {
      const cmp = await $('method-promise-async-true-args-one');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: returns=promise async=true args=one');
      await expect(cmp.$('#counter')).toHaveText('1');
    });

    it('renders promise async=false args=one and updates counter after resolution', async () => {
      const cmp = await $('method-promise-async-false-args-one');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: returns=promise async=false args=one');
      await expect(cmp.$('#counter')).toHaveText('1');
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
