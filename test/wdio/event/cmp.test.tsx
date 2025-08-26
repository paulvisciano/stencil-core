import { render } from '@wdio/browser-runner/stencil';
import { $ } from '@wdio/globals';
import { h } from '@stencil/core';

describe('event decorators', () => {
  it('should have bubbles set to false', async () => {
    render({
      template: () => <event-bubbles-false></event-bubbles-false>,
    });
    await expect($('event-bubbles-false #counter')).toHaveText('1');
  });

  it('should have cancelable set to false', async () => {
    render({
      template: () => <event-cancelable-false></event-cancelable-false>,
    });
    await expect($('event-cancelable-false #counter')).toHaveText('1');
  });

  it('should have composed set to false', async () => {
    render({
      template: () => <event-composed-false></event-composed-false>,
    });
    await expect($('event-composed-false #counter')).toHaveText('1');
  });

  it('should have bubbles and cancelable set to false', async () => {
    render({
      template: () => <event-bubbles-false-cancelable-false></event-bubbles-false-cancelable-false>,
    });
    await expect($('event-bubbles-false-cancelable-false #counter')).toHaveText('1');
  });

  it('should have bubbles and composed set to false', async () => {
    render({
      template: () => <event-bubbles-false-composed-false></event-bubbles-false-composed-false>,
    });
    await expect($('event-bubbles-false-composed-false #counter')).toHaveText('1');
  });

  it('should have cancelable and composed set to false', async () => {
    render({
      template: () => <event-cancelable-false-composed-false></event-cancelable-false-composed-false>,
    });
    await expect($('event-cancelable-false-composed-false #counter')).toHaveText('1');
  });

  it('should have all properties set to false', async () => {
    render({
      template: () => <event-all-false></event-all-false>,
    });
    await expect($('event-all-false #counter')).toHaveText('1');
  });
});
