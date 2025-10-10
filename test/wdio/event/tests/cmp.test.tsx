import { render } from '@wdio/browser-runner/stencil';
import { $, expect } from '@wdio/globals';
import { h } from '@stencil/core';

describe('@Event decorator (generated matrix)', () => {
  it('bubbles=true, cancelable=true, composed=true', async () => {
    // $('event-bubbles-cancelable-composed')
    render({ template: () => <event-bubbles-cancelable-composed></event-bubbles-cancelable-composed> });
    await expect($('event-bubbles-cancelable-composed')).toBeExisting();
  });

  it('bubbles=true, cancelable=true, composed=false', async () => {
    // $('event-bubbles-cancelable-composed-false')
    render({ template: () => <event-bubbles-cancelable-composed-false></event-bubbles-cancelable-composed-false> });
    await expect($('event-bubbles-cancelable-composed-false')).toBeExisting();
  });

  it('bubbles=true, cancelable=false, composed=true', async () => {
    // $('event-bubbles-cancelable-false-composed')
    render({ template: () => <event-bubbles-cancelable-false-composed></event-bubbles-cancelable-false-composed> });
    await expect($('event-bubbles-cancelable-false-composed')).toBeExisting();
  });

  it('bubbles=true, cancelable=false, composed=false', async () => {
    // $('event-bubbles-cancelable-false-composed-false')
    render({ template: () => <event-bubbles-cancelable-false-composed-false></event-bubbles-cancelable-false-composed-false> });
    await expect($('event-bubbles-cancelable-false-composed-false')).toBeExisting();
  });

  it('bubbles=false, cancelable=true, composed=true', async () => {
    // $('event-bubbles-false-cancelable-composed')
    render({ template: () => <event-bubbles-false-cancelable-composed></event-bubbles-false-cancelable-composed> });
    await expect($('event-bubbles-false-cancelable-composed')).toBeExisting();
  });

  it('bubbles=false, cancelable=true, composed=false', async () => {
    // $('event-bubbles-false-cancelable-composed-false')
    render({ template: () => <event-bubbles-false-cancelable-composed-false></event-bubbles-false-cancelable-composed-false> });
    await expect($('event-bubbles-false-cancelable-composed-false')).toBeExisting();
  });

  it('bubbles=false, cancelable=false, composed=true', async () => {
    // $('event-bubbles-false-cancelable-false-composed')
    render({ template: () => <event-bubbles-false-cancelable-false-composed></event-bubbles-false-cancelable-false-composed> });
    await expect($('event-bubbles-false-cancelable-false-composed')).toBeExisting();
  });

  it('bubbles=false, cancelable=false, composed=false', async () => {
    // $('event-bubbles-false-cancelable-false-composed-false')
    render({ template: () => <event-bubbles-false-cancelable-false-composed-false></event-bubbles-false-cancelable-false-composed-false> });
    await expect($('event-bubbles-false-cancelable-false-composed-false')).toBeExisting();
  });
});
