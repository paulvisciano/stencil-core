import { render } from '@wdio/browser-runner/stencil';
import { $ } from '@wdio/globals';
import { h } from '@stencil/core';

describe('@Event decorator', () => {
  it('should fire an event for bubbles=false, cancelable=false, composed=false', async () => {
    render({
      template: () => <event-all-false></event-all-false>,
    });
    await expect($('event-all-false #counter')).toHaveText('1');
  });

  it('should fire an event for bubbles=true, cancelable=true, composed=true', async () => {
    render({
      template: () => <event-all-true></event-all-true>,
    });
    await expect($('event-all-true #counter')).toHaveText('1');
  });

  it('should fire an event for bubbles=true, cancelable=true, composed=false', async () => {
    render({
      template: () => <event-bubbles-true-cancelable-true-composed-false></event-bubbles-true-cancelable-true-composed-false>,
    });
    await expect($('event-bubbles-true-cancelable-true-composed-false #counter')).toHaveText('1');
  });

  it('should fire an event for bubbles=true, cancelable=false, composed=true', async () => {
    render({
      template: () => <event-bubbles-true-cancelable-false-composed-true></event-bubbles-true-cancelable-false-composed-true>,
    });
    await expect($('event-bubbles-true-cancelable-false-composed-true #counter')).toHaveText('1');
  });

  it('should fire an event for bubbles=false, cancelable=true, composed=true', async () => {
    render({
      template: () => <event-bubbles-false-cancelable-true-composed-true></event-bubbles-false-cancelable-true-composed-true>,
    });
    await expect($('event-bubbles-false-cancelable-true-composed-true #counter')).toHaveText('1');
  });

  it('should fire an event for bubbles=false, cancelable=false, composed=true', async () => {
    render({
      template: () => <event-bubbles-false-cancelable-false-composed-true></event-bubbles-false-cancelable-false-composed-true>,
    });
    await expect($('event-bubbles-false-cancelable-false-composed-true #counter')).toHaveText('1');
  });

  it('should fire an event for bubbles=false, cancelable=true, composed=false', async () => {
    render({
      template: () => <event-bubbles-false-cancelable-true-composed-false></event-bubbles-false-cancelable-true-composed-false>,
    });
    await expect($('event-bubbles-false-cancelable-true-composed-false #counter')).toHaveText('1');
  });

  it('should fire an event for bubbles=true, cancelable=false, composed=false', async () => {
    render({
      template: () => <event-bubbles-true-cancelable-false-composed-false></event-bubbles-true-cancelable-false-composed-false>,
    });
    await expect($('event-bubbles-true-cancelable-false-composed-false #counter')).toHaveText('1');
  });
});
