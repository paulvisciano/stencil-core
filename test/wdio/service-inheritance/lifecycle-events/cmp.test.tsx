import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';
import { $, expect, browser } from '@wdio/globals';

describe('service-inheritance (lifecycle-events)', () => {
  beforeEach(() => {
    render({
      components: [],
      template: () => (
        <div>
          <lifecycle-cpm-a></lifecycle-cpm-a>
          <lifecycle-cpm-b></lifecycle-cpm-b>
        </div>
      ),
    });
  });

  it('tracks lifecycle counters and service usage', async () => {
    await $('lifecycle-cpm-a').waitForExist();
    await $('lifecycle-cpm-b').waitForExist();

    // initial load + render counters
    await expect($('lifecycle-cpm-a .willLoad')).toHaveText('1');
    await expect($('lifecycle-cpm-a .didLoad')).toHaveText('1');
    await expect($('lifecycle-cpm-a .willRender')).toHaveText(expect.stringMatching(/^[1-9]\d*$/));
    await expect($('lifecycle-cpm-a .didRender')).toHaveText(expect.stringMatching(/^[1-9]\d*$/));

    // service calls start at 0, click increments and triggers update lifecycles once
    await expect($('lifecycle-cpm-a .calls')).toHaveText('0');
    await $('lifecycle-cpm-a .go').click();

    await expect($('lifecycle-cpm-a .calls')).toHaveText('1');
    await expect($('lifecycle-cpm-a .willUpdate')).toHaveText('1');
    await expect($('lifecycle-cpm-a .didUpdate')).toHaveText('1');

    // B should not reflect A's service calls
    await expect($('lifecycle-cpm-b .calls')).toHaveText('0');
  });

  it('increments willRender/didRender on state update', async () => {
    await $('lifecycle-cpm-a').waitForExist();

    const willRender0 = Number(await $('lifecycle-cpm-a .willRender').getText());
    const didRender0 = Number(await $('lifecycle-cpm-a .didRender').getText());

    await $('lifecycle-cpm-a .go').click();

    await browser.waitUntil(async () => {
      const wr = Number(await $('lifecycle-cpm-a .willRender').getText());
      const dr = Number(await $('lifecycle-cpm-a .didRender').getText());
      return wr > willRender0 && dr > didRender0;
    }, { timeout: 3000, timeoutMsg: 'render counters did not increment after update' });
  });

  it('increments connected/disconnected on detach and reattach', async () => {
    await $('lifecycle-cpm-a').waitForExist();

    const connected0 = Number(await $('lifecycle-cpm-a .connected').getText());
    const disconnected0 = Number(await $('lifecycle-cpm-a .disconnected').getText());

    // detach and reattach the same element
    await browser.execute(() => {
      const el = document.querySelector('lifecycle-cpm-a');
      const parent = el?.parentElement;
      if (el && parent) {
        el.remove();
        parent.appendChild(el);
      }
    });

    await browser.waitUntil(async () => Number(await $('lifecycle-cpm-a .connected').getText()) === connected0 + 1, {
      timeout: 3000,
      timeoutMsg: 'connected counter did not increment after reattach',
    });
    await browser.waitUntil(async () => Number(await $('lifecycle-cpm-a .disconnected').getText()) === disconnected0 + 1, {
      timeout: 3000,
      timeoutMsg: 'disconnected counter did not increment after detach',
    });
  });
});
