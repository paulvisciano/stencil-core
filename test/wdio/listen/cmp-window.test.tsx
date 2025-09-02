import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';

describe('listen-window', function () {
  beforeEach(() => {
    render({
      template: () => <listen-window></listen-window>,
    });
  });

  it('should receive custom-window-event on window with capture', async () => {
    await browser.execute(() => {
      window.dispatchEvent(new CustomEvent('custom-window-event'));
    });
    await expect($('#window-result')).toHaveText('Received');
  });
});
