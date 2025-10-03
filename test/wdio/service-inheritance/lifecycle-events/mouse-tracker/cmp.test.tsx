import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';
import { $, $$, expect, browser } from '@wdio/globals';
import './cmp-mouse';

describe('service-inheritance (extends-only)', () => {
  it('tracks mouse position via base service and updates host', async () => {
    render({
      components: [],
      template: () => (
        <div>
          <cmp-mouse></cmp-mouse>
        </div>
      ),
    });

    await $('cmp-mouse').waitForExist();

    // simulate a couple of mouse moves in the window
    await browser.execute(() => {
      const ev1 = new MouseEvent('mousemove', { clientX: 10, clientY: 20, bubbles: true });
      const ev2 = new MouseEvent('mousemove', { clientX: 30, clientY: 40, bubbles: true });
      window.dispatchEvent(ev1);
      window.dispatchEvent(ev2);
    });

    const pos = await $('cmp-mouse .pos').getText();
    expect(pos).toBe('30,40');

    const moves = await $('cmp-mouse .moves').getText();
    expect(moves).toContain('10,20');
    expect(moves).toContain('30,40');
  });

});
