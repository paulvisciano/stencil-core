import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';

describe('listen-document', function () {
  beforeEach(() => {
    render({
      template: () => <listen-document></listen-document>,
    });
  });

  it('should receive custom-document-event on document with capture', async () => {
    await browser.execute(() => {
      document.dispatchEvent(new CustomEvent('custom-document-event'));
    });
    await expect($('#document-result')).toHaveText('Received');
  });
});
