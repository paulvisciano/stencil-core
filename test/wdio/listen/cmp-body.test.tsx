import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';

describe('listen-body', function () {
  beforeEach(() => {
    render({
      template: () => <listen-body></listen-body>,
    });
  });

  it('should receive custom-body-event on body with capture', async () => {
    await browser.execute(() => {
      document.body.dispatchEvent(new CustomEvent('custom-body-event'));
    });
    await expect($('#body-result')).toHaveText('Received');
  });
});
