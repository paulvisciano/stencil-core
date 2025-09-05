import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';

describe('cmp-document-click-nocapture-nopassive', () => {
  beforeEach(() => {
    render({
      template: () => <cmp-document-click-nocapture-nopassive></cmp-document-click-nocapture-nopassive>,
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
