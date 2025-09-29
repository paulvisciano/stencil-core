import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';
import { $, $$, expect, browser } from '@wdio/globals';
import './cmp-mouse';

describe('service-inheritance (extends-only)', () => {
  beforeEach(() => {
    render({
      components: [],
      template: () => (
        <div>
          <svc-inherit-a></svc-inherit-a>
          <svc-inherit-b></svc-inherit-b>
        </div>
      ),
    });
  });

  it('reuses a shared service via base class and taps lifecycle', async () => {
    await $('svc-inherit-a').waitForExist();
    await $('svc-inherit-b').waitForExist();

    // On initial render, both should have base lifecycle loads recorded
    const loadsA = await $('svc-inherit-a .loads').getText();
    const loadsB = await $('svc-inherit-b .loads').getText();
    expect(loadsA).toContain('base:willLoad');
    expect(loadsA).toContain('base:didLoad');
    expect(loadsB).toContain('base:willLoad');
    expect(loadsB).toContain('base:didLoad');

    // Trigger update on A and call service method
    const go = await $('svc-inherit-a .go');
    await go.click();

    // Both should show their own update chains (base hooks fire per instance)
    const updatesA = await $('svc-inherit-a .updates').getText();
    expect(updatesA).toContain('base:willUpdate');
    expect(updatesA).toContain('base:didUpdate');

    // Service call counter increments only for A
    const callsA = await $('svc-inherit-a .calls').getText();
    const callsB = await $('svc-inherit-b .calls').getText();
    expect(callsA).toBe('1');
    expect(callsB).toBe('0');
  });

  it('tracks mouse position via base service and updates host', async () => {
    render({
      components: [],
      template: () => (
        <div>
          <mouse-tracker></mouse-tracker>
        </div>
      ),
    });

    await $('mouse-tracker').waitForExist();

    // simulate a couple of mouse moves in the window
    await browser.execute(() => {
      const ev1 = new MouseEvent('mousemove', { clientX: 10, clientY: 20, bubbles: true });
      const ev2 = new MouseEvent('mousemove', { clientX: 30, clientY: 40, bubbles: true });
      window.dispatchEvent(ev1);
      window.dispatchEvent(ev2);
    });

    const pos = await $('mouse-tracker .pos').getText();
    expect(pos).toBe('30,40');

    const moves = await $('mouse-tracker .moves').getText();
    expect(moves).toContain('10,20');
    expect(moves).toContain('30,40');
  });
});
