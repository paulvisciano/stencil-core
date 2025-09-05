import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';

describe('cmp-host-click-nocapture-passive', () => {
  beforeEach(() => {
    render({
      template: () => <listen-host-click-nocapture-passive></listen-host-click-nocapture-passive>,
    });
  });

  it('should increment clicked count on host click', async () => {
    expect(await $('#clicked').getText()).toEqual('Clicked: 0');
    await browser.execute(() => {
      document.querySelector('listen-host-click-nocapture-passive').dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(await $('#clicked').getText()).toEqual('Clicked: 1');
  });
});
