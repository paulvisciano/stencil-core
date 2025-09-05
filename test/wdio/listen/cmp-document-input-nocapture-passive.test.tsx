import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';

describe('cmp-document-input-nocapture-passive', () => {
  beforeEach(() => {
    render({
      template: () => <cmp-document-input-nocapture-passive></cmp-document-input-nocapture-passive>,
    });
  });

  it('should increment inputCount on input', async () => {
    expect(await $('#output').getText()).toContain('document input nocapture passive: 0');
    const input = await $('#test-input');
    await input.waitForExist({ timeout: 3000 });
    await input.setValue('t');
    expect(await $('#output').getText()).toContain('document input nocapture passive: 1');
  });
});
