import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';

describe('listen-parent-no-capture', function () {
  beforeEach(() => {
    render({
      template: () => <div id="parent"><listen-parent-no-capture></listen-parent-no-capture></div>,
    });
  });

  it('should receive custom-parent-event on parent without capture', async () => {
    await browser.execute(() => {
      document.getElementById('parent').dispatchEvent(new CustomEvent('custom-parent-event', { bubbles: true }));
    });
    await expect($('#parent-no-capture-result')).toHaveText('Received');
  });
});
