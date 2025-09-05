import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';
import { browser } from '@wdio/globals';

describe('cmp-body-input-nocapture-nopassive', () => {
  beforeEach(() => {
    render({
      template: () => <cmp-body-input-nocapture-nopassive></cmp-body-input-nocapture-nopassive>,
    });
  });

  it('should increment inputCount on input', async () => {
    expect(await (await browser.$('#output')).getText()).toContain('body input nocapture nopassive: 0');
    const input = await browser.$('#test-input');
    await input.waitForExist({ timeout: 3000 });
    await input.setValue('t');
    expect(await (await browser.$('#output')).getText()).toContain('body input nocapture nopassive: 1');
  });
});
