import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';

describe('listen-host-capture', function () {
  beforeEach(() => {
    render({
      template: () => <listen-host-capture></listen-host-capture>,
    });
  });

  it('should receive custom-host-event on host with capture', async () => {
    await browser.execute(() => {
      document.querySelector('listen-host-capture').dispatchEvent(new CustomEvent('custom-host-event', { bubbles: true }));
    });
    await expect($('#host-capture-result')).toHaveText('Received');
  });
});
