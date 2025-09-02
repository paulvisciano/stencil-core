import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';

describe('listen-parent-capture', function () {
  beforeEach(() => {
    render({
      template: () => <div id="parent"><listen-parent-capture></listen-parent-capture></div>,
    });
  });

  it('should receive custom-parent-event on parent with capture', async () => {
    await browser.execute(() => {
      document.getElementById('parent').dispatchEvent(new CustomEvent('custom-parent-event', { bubbles: true }));
    });
    await expect($('#parent-capture-result')).toHaveText('Received');
  });
});
