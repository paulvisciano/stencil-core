import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';

describe('listen-body-no-capture', function () {
  beforeEach(() => {
    render({
      template: () => <listen-body-no-capture></listen-body-no-capture>,
    });
  });

  it('should receive custom-body-event on body without capture', async () => {
    await browser.execute(() => {
      document.body.dispatchEvent(new CustomEvent('custom-body-event'));
    });
    await expect($('#body-no-capture-result')).toHaveText('Received');
  });
});
