import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';

describe('listen-document-no-capture', function () {
  beforeEach(() => {
    render({
      template: () => <listen-document-no-capture></listen-document-no-capture>,
    });
  });

  it('should receive custom-document-event on document without capture', async () => {
    await browser.execute(() => {
      document.dispatchEvent(new CustomEvent('custom-document-event'));
    });
    await expect($('#document-no-capture-result')).toHaveText('Received');
  });
});
