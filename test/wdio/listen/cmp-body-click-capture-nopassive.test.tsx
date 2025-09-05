import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';

describe('cmp-body-click-capture-nopassive', () => {
  beforeEach(() => {
    render({
      template: () => <cmp-body-click-capture-nopassive></cmp-body-click-capture-nopassive>,
    });
  });

  it('should increment clicked count on body click', async () => {
    expect(await $('#clicked').getText()).toEqual('Clicked: 0');
    await browser.execute(() => {
      document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(await $('#clicked').getText()).toEqual('Clicked: 1');
  });
});
