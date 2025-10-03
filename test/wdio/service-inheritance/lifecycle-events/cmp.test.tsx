import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';
import { $, expect } from '@wdio/globals';

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

  it('reuses a shared service via base class and taps lifecycle', async () => {
    await $('lifecycle-cpm-a').waitForExist();
    await $('lifecycle-cpm-b').waitForExist();

    const loadsA = await $('lifecycle-cpm-a .loads').getText();
    const loadsB = await $('lifecycle-cpm-b .loads').getText();
    expect(loadsA).toContain('base:willLoad');
    expect(loadsA).toContain('base:didLoad');
    expect(loadsB).toContain('base:willLoad');
    expect(loadsB).toContain('base:didLoad');

    const go = await $('lifecycle-cpm-a .go');
    await go.click();

    const updatesA = await $('lifecycle-cpm-a .updates').getText();
    expect(updatesA).toContain('base:willUpdate');
    expect(updatesA).toContain('base:didUpdate');

    const callsA = await $('lifecycle-cpm-a .calls').getText();
    const callsB = await $('lifecycle-cpm-b .calls').getText();
    expect(callsA).toBe('1');
    expect(callsB).toBe('0');
  });
});
