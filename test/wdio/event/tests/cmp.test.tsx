import { render } from '@wdio/browser-runner/stencil';
import { $, expect } from '@wdio/globals';
import { h } from '@stencil/core';

describe('@Event decorator (generated matrix)', () => {
  const expectCounter = async (selector: string) => {
    await expect($(`${selector} #counter`)).toHaveText('1');
  };

  it('bubbles=true, cancelable=true, composed=true', async () => {
    render({ components: [], template: () => <event-bubbles-cancelable-composed></event-bubbles-cancelable-composed> });
    await expectCounter('event-bubbles-cancelable-composed');
  });

  it('bubbles=true, cancelable=true, composed=false', async () => {
    render({ components: [], template: () => <event-bubbles-cancelable-composed-false></event-bubbles-cancelable-composed-false> });
    await expectCounter('event-bubbles-cancelable-composed-false');
  });

  it('bubbles=true, cancelable=false, composed=true', async () => {
    render({ components: [], template: () => <event-bubbles-cancelable-false-composed></event-bubbles-cancelable-false-composed> });
    await expectCounter('event-bubbles-cancelable-false-composed');
  });

  it('bubbles=true, cancelable=false, composed=false', async () => {
    render({ components: [], template: () => <event-bubbles-cancelable-false-composed-false></event-bubbles-cancelable-false-composed-false> });
    await expectCounter('event-bubbles-cancelable-false-composed-false');
  });

  it('bubbles=false, cancelable=true, composed=true', async () => {
    render({ components: [], template: () => <event-bubbles-false-cancelable-composed></event-bubbles-false-cancelable-composed> });
    await expectCounter('event-bubbles-false-cancelable-composed');
  });

  it('bubbles=false, cancelable=true, composed=false', async () => {
    render({ components: [], template: () => <event-bubbles-false-cancelable-composed-false></event-bubbles-false-cancelable-composed-false> });
    await expectCounter('event-bubbles-false-cancelable-composed-false');
  });

  it('bubbles=false, cancelable=false, composed=true', async () => {
    render({ components: [], template: () => <event-bubbles-false-cancelable-false-composed></event-bubbles-false-cancelable-false-composed> });
    await expectCounter('event-bubbles-false-cancelable-false-composed');
  });

  it('bubbles=false, cancelable=false, composed=false', async () => {
    render({ components: [], template: () => <event-bubbles-false-cancelable-false-composed-false></event-bubbles-false-cancelable-false-composed-false> });
    await expectCounter('event-bubbles-false-cancelable-false-composed-false');
  });
});
