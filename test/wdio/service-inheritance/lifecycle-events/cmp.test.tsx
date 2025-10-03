import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';
import { $, expect } from '@wdio/globals';
import './cmp-a';
import './cmp-b';

describe('service-inheritance (lifecycle-events)', () => {
  beforeEach(() => {
    render({
      components: [],
      template: () => (
        <div>
          <lifecycle-cmp-a></lifecycle-cmp-a>
          <lifecycle-cmp-b></lifecycle-cmp-b>
        </div>
      ),
    });
  });

  it('reuses a shared service via base class and taps lifecycle', async () => {
    await $('lifecycle-cmp-a').waitForExist();
    await $('lifecycle-cmp-b').waitForExist();

    const loadsA = await $('lifecycle-cmp-a .loads').getText();
    const loadsB = await $('lifecycle-cmp-b .loads').getText();
    expect(loadsA).toContain('base:willLoad');
    expect(loadsA).toContain('base:didLoad');
    expect(loadsB).toContain('base:willLoad');
    expect(loadsB).toContain('base:didLoad');

    const go = await $('lifecycle-cmp-a .go');
    await go.click();

    const updatesA = await $('lifecycle-cmp-a .updates').getText();
    expect(updatesA).toContain('base:willUpdate');
    expect(updatesA).toContain('base:didUpdate');

    const callsA = await $('lifecycle-cmp-a .calls').getText();
    const callsB = await $('lifecycle-cmp-b .calls').getText();
    expect(callsA).toBe('1');
    expect(callsB).toBe('0');
  });
});
