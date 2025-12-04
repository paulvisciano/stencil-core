import { render } from '@wdio/browser-runner/stencil';
import { $, expect } from '@wdio/globals';
import { h, Fragment } from '@stencil/core';

describe('@Event decorator', () => {
  before(async () => {
    render({
      components: [],
      template: () => (
        <Fragment>
          {/* bubbling events */}
          <event-bubbles-cancelable-composed></event-bubbles-cancelable-composed>
          <event-bubbles-cancelable-composed-false></event-bubbles-cancelable-composed-false>
          <event-bubbles-cancelable-false-composed></event-bubbles-cancelable-false-composed>
          <event-bubbles-cancelable-false-composed-false></event-bubbles-cancelable-false-composed-false>
          
          {/* non-bubbling events */}
          <event-bubbles-false-cancelable-composed></event-bubbles-false-cancelable-composed>
          <event-bubbles-false-cancelable-composed-false></event-bubbles-false-cancelable-composed-false>
          <event-bubbles-false-cancelable-false-composed></event-bubbles-false-cancelable-false-composed>
          <event-bubbles-false-cancelable-false-composed-false></event-bubbles-false-cancelable-false-composed-false>
        </Fragment>
      ),
    });
  });

  describe('Test Case #1 – Bubbling events', () => {
    it('renders bubbles=true cancelable=true composed=true and fires event', async () => {
      const cmp = await $('event-bubbles-cancelable-composed');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: bubbles=true cancelable=true composed=true');
      await expect(cmp.$('#counter')).toHaveText('1');
    });

    it('renders bubbles=true cancelable=true composed=false and fires event', async () => {
      const cmp = await $('event-bubbles-cancelable-composed-false');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: bubbles=true cancelable=true composed=false');
      await expect(cmp.$('#counter')).toHaveText('1');
    });

    it('renders bubbles=true cancelable=false composed=true and fires event', async () => {
      const cmp = await $('event-bubbles-cancelable-false-composed');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: bubbles=true cancelable=false composed=true');
      await expect(cmp.$('#counter')).toHaveText('1');
    });

    it('renders bubbles=true cancelable=false composed=false and fires event', async () => {
      const cmp = await $('event-bubbles-cancelable-false-composed-false');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: bubbles=true cancelable=false composed=false');
      await expect(cmp.$('#counter')).toHaveText('1');
    });
  });

  describe('Test Case #2 – Non-bubbling events', () => {
    it('renders bubbles=false cancelable=true composed=true and fires event', async () => {
      const cmp = await $('event-bubbles-false-cancelable-composed');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: bubbles=false cancelable=true composed=true');
      await expect(cmp.$('#counter')).toHaveText('1');
    });

    it('renders bubbles=false cancelable=true composed=false and fires event', async () => {
      const cmp = await $('event-bubbles-false-cancelable-composed-false');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: bubbles=false cancelable=true composed=false');
      await expect(cmp.$('#counter')).toHaveText('1');
    });

    it('renders bubbles=false cancelable=false composed=true and fires event', async () => {
      const cmp = await $('event-bubbles-false-cancelable-false-composed');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: bubbles=false cancelable=false composed=true');
      await expect(cmp.$('#counter')).toHaveText('1');
    });

    it('renders bubbles=false cancelable=false composed=false and fires event', async () => {
      const cmp = await $('event-bubbles-false-cancelable-false-composed-false');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: bubbles=false cancelable=false composed=false');
      await expect(cmp.$('#counter')).toHaveText('1');
    });
  });
});