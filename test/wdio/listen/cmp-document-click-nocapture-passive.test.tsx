import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';

describe('cmp-document-click-nocapture-passive', () => {
  beforeEach(() => {
    render({
      template: () => <cmp-document-click-nocapture-passive></cmp-document-click-nocapture-passive>,
    });
  });

  it('should increment clicked count on document click', async () => {
    expect(await $('#clicked').getText()).toEqual('Clicked: 0');
    await browser.execute(() => {
      document.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(await $('#clicked').getText()).toEqual('Clicked: 1');
  });
});
