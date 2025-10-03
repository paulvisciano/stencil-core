import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';
import { $, expect, browser } from '@wdio/globals';
import '../cmp-state-base';

describe('service-inheritance: @State on base class', () => {
  it('updates derived host when inherited @State changes', async () => {
    render({
      components: [],
      template: () => <cmp-state-base></cmp-state-base>,
    });

    await $('cmp-state-base').waitForExist();

    const getCount = async () => Number(await $('cmp-state-base .count').getText());

    expect(await getCount()).toBe(0);

    const inc = await $('cmp-state-base .inc');
    await inc.click();

    await browser.waitUntil(async () => (await getCount()) === 1, { timeout: 3000, timeoutMsg: 'count did not update to 1' });

    await inc.click();

    await browser.waitUntil(async () => (await getCount()) === 2, { timeout: 3000, timeoutMsg: 'count did not update to 2' });
  });
});
