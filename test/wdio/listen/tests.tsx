import { render } from '@wdio/browser-runner/stencil';
import { $, expect, browser } from '@wdio/globals';
import { h, Fragment } from '@stencil/core';

describe('@Listen decorator', () => {
  before(async () => {
    render({
      components: [],
      template: () => (
        <Fragment>
          {/* Host target components */}
          <listen-host-click-capture-false-passive-false></listen-host-click-capture-false-passive-false>
          <listen-host-click-capture-false-passive></listen-host-click-capture-false-passive>
          <listen-host-click-capture-passive-false></listen-host-click-capture-passive-false>
          <listen-host-click-capture-passive></listen-host-click-capture-passive>
          <listen-host-input-capture-false-passive-false></listen-host-input-capture-false-passive-false>
          <listen-host-input-capture-false-passive></listen-host-input-capture-false-passive>
          <listen-host-input-capture-passive-false></listen-host-input-capture-passive-false>
          <listen-host-input-capture-passive></listen-host-input-capture-passive>
          <listen-host-keydown-capture-false-passive-false></listen-host-keydown-capture-false-passive-false>
          <listen-host-keydown-capture-false-passive></listen-host-keydown-capture-false-passive>
          <listen-host-keydown-capture-passive-false></listen-host-keydown-capture-passive-false>
          <listen-host-keydown-capture-passive></listen-host-keydown-capture-passive>

          {/* Window target components */}
          <listen-window-click-capture-false-passive-false></listen-window-click-capture-false-passive-false>
          <listen-window-click-capture-false-passive></listen-window-click-capture-false-passive>
          <listen-window-click-capture-passive-false></listen-window-click-capture-passive-false>
          <listen-window-click-capture-passive></listen-window-click-capture-passive>
          <listen-window-keydown-capture-false-passive-false></listen-window-keydown-capture-false-passive-false>
          <listen-window-keydown-capture-false-passive></listen-window-keydown-capture-false-passive>
          <listen-window-keydown-capture-passive-false></listen-window-keydown-capture-passive-false>
          <listen-window-keydown-capture-passive></listen-window-keydown-capture-passive>

          {/* Document target components */}
          <listen-document-click-capture-false-passive-false></listen-document-click-capture-false-passive-false>
          <listen-document-click-capture-false-passive></listen-document-click-capture-false-passive>
          <listen-document-click-capture-passive-false></listen-document-click-capture-passive-false>
          <listen-document-click-capture-passive></listen-document-click-capture-passive>
          <listen-document-input-capture-false-passive-false></listen-document-input-capture-false-passive-false>
          <listen-document-input-capture-false-passive></listen-document-input-capture-false-passive>
          <listen-document-input-capture-passive-false></listen-document-input-capture-passive-false>
          <listen-document-input-capture-passive></listen-document-input-capture-passive>
          <listen-document-keydown-capture-false-passive-false></listen-document-keydown-capture-false-passive-false>
          <listen-document-keydown-capture-false-passive></listen-document-keydown-capture-false-passive>
          <listen-document-keydown-capture-passive-false></listen-document-keydown-capture-passive-false>
          <listen-document-keydown-capture-passive></listen-document-keydown-capture-passive>

          {/* Body target components */}
          <listen-body-click-capture-false-passive-false></listen-body-click-capture-false-passive-false>
          <listen-body-click-capture-false-passive></listen-body-click-capture-false-passive>
          <listen-body-click-capture-passive-false></listen-body-click-capture-passive-false>
          <listen-body-click-capture-passive></listen-body-click-capture-passive>
          <listen-body-input-capture-false-passive-false></listen-body-input-capture-false-passive-false>
          <listen-body-input-capture-false-passive></listen-body-input-capture-false-passive>
          <listen-body-input-capture-passive-false></listen-body-input-capture-passive-false>
          <listen-body-input-capture-passive></listen-body-input-capture-passive>
          <listen-body-keydown-capture-false-passive-false></listen-body-keydown-capture-false-passive-false>
          <listen-body-keydown-capture-false-passive></listen-body-keydown-capture-false-passive>
          <listen-body-keydown-capture-passive-false></listen-body-keydown-capture-passive-false>
          <listen-body-keydown-capture-passive></listen-body-keydown-capture-passive>
        </Fragment>
      ),
    });
  });

  describe('Test Case #1 – Host target events', () => {
    it('host click event with capture=false passive=false triggers listener', async () => {
      const cmp = await $('listen-host-click-capture-false-passive-false');
      await cmp.waitForExist();
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: target=host event=click capture=false passive=false');
      const counter = await cmp.$('#counter');
      await counter.waitForExist();
      await (browser as any).waitUntil(async () => {
        return (await counter.getText()) === '1';
      }, { timeout: 3000 });
      await expect(counter).toHaveText('1');
    });

    it('host click event with capture=false passive=true triggers listener', async () => {
      const cmp = await $('listen-host-click-capture-false-passive');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: target=host event=click capture=false passive=true');
      await expect(cmp.$('#counter')).toHaveText('1');
    });

    it('host click event with capture=true passive=false triggers listener', async () => {
      const cmp = await $('listen-host-click-capture-passive-false');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: target=host event=click capture=true passive=false');
      await expect(cmp.$('#counter')).toHaveText('1');
    });

    it('host click event with capture=true passive=true triggers listener', async () => {
      const cmp = await $('listen-host-click-capture-passive');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: target=host event=click capture=true passive=true');
      await expect(cmp.$('#counter')).toHaveText('1');
    });

    it('host input event triggers listener', async () => {
      const cmp = await $('listen-host-input-capture-false-passive-false');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: target=host event=input capture=false passive=false');
      await expect(cmp.$('#counter')).toHaveText('1');
    });

    it('host keydown event triggers listener', async () => {
      const cmp = await $('listen-host-keydown-capture-false-passive-false');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: target=host event=keydown capture=false passive=false');
      await expect(cmp.$('#counter')).toHaveText('1');
    });
  });

  describe('Test Case #2 – Global target events', () => {
    it('window click event triggers listener', async () => {
      const cmp = await $('listen-window-click-capture-false-passive-false');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: target=window event=click capture=false passive=false');
      await expect(cmp.$('#counter')).toHaveText('1');
    });

    it('window keydown event triggers listener', async () => {
      const cmp = await $('listen-window-keydown-capture-false-passive-false');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: target=window event=keydown capture=false passive=false');
      await expect(cmp.$('#counter')).toHaveText('1');
    });

    it('document click event triggers listener', async () => {
      const cmp = await $('listen-document-click-capture-false-passive-false');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: target=document event=click capture=false passive=false');
      await expect(cmp.$('#counter')).toHaveText('1');
    });

    it('document input event triggers listener', async () => {
      const cmp = await $('listen-document-input-capture-false-passive-false');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: target=document event=input capture=false passive=false');
      await expect(cmp.$('#counter')).toHaveText('1');
    });

    it('document keydown event triggers listener', async () => {
      const cmp = await $('listen-document-keydown-capture-false-passive-false');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: target=document event=keydown capture=false passive=false');
      await expect(cmp.$('#counter')).toHaveText('1');
    });

    it('body click event triggers listener', async () => {
      const cmp = await $('listen-body-click-capture-false-passive-false');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: target=body event=click capture=false passive=false');
      await expect(cmp.$('#counter')).toHaveText('1');
    });

    it('body input event triggers listener', async () => {
      const cmp = await $('listen-body-input-capture-false-passive-false');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: target=body event=input capture=false passive=false');
      await expect(cmp.$('#counter')).toHaveText('1');
    });

    it('body keydown event triggers listener', async () => {
      const cmp = await $('listen-body-keydown-capture-false-passive-false');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: target=body event=keydown capture=false passive=false');
      await expect(cmp.$('#counter')).toHaveText('1');
    });
  });

  describe('Test Case #3 – Capture phase behavior', () => {
    it('capture=true on host target triggers listener in capture phase', async () => {
      const cmp = await $('listen-host-click-capture-passive-false');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: target=host event=click capture=true passive=false');
      await expect(cmp.$('#counter')).toHaveText('1');
    });

    it('capture=true on window target triggers listener in capture phase', async () => {
      const cmp = await $('listen-window-click-capture-passive-false');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: target=window event=click capture=true passive=false');
      await expect(cmp.$('#counter')).toHaveText('1');
    });

    it('capture=true on document target triggers listener in capture phase', async () => {
      const cmp = await $('listen-document-click-capture-passive-false');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: target=document event=click capture=true passive=false');
      await expect(cmp.$('#counter')).toHaveText('1');
    });

    it('capture=true on body target triggers listener in capture phase', async () => {
      const cmp = await $('listen-body-click-capture-passive-false');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: target=body event=click capture=true passive=false');
      await expect(cmp.$('#counter')).toHaveText('1');
    });
  });

  describe('Test Case #4 – Passive listener behavior', () => {
    it('passive=true on host target marks listener as passive', async () => {
      const cmp = await $('listen-host-click-capture-false-passive');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: target=host event=click capture=false passive=true');
      await expect(cmp.$('#counter')).toHaveText('1');
    });

    it('passive=true on window target marks listener as passive', async () => {
      const cmp = await $('listen-window-click-capture-false-passive');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: target=window event=click capture=false passive=true');
      await expect(cmp.$('#counter')).toHaveText('1');
    });

    it('passive=true on document target marks listener as passive', async () => {
      const cmp = await $('listen-document-click-capture-false-passive');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: target=document event=click capture=false passive=true');
      await expect(cmp.$('#counter')).toHaveText('1');
    });

    it('passive=true on body target marks listener as passive', async () => {
      const cmp = await $('listen-body-click-capture-false-passive');
      await expect(cmp.$('p:nth-child(1)')).toHaveText('Options: target=body event=click capture=false passive=true');
      await expect(cmp.$('#counter')).toHaveText('1');
    });
  });
});

