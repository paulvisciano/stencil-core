import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';

describe('cmp-document-click-capture-nopassive', () => {
  beforeEach(() => {
    render({
      template: () => <cmp-document-click-capture-nopassive></cmp-document-click-capture-nopassive>,
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
