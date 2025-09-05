import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';

describe('cmp-document-input-nocapture-nopassive', () => {
  beforeEach(() => {
    render({
      template: () => <cmp-document-input-nocapture-nopassive></cmp-document-input-nocapture-nopassive>,
    });
  });

  it('should increment inputCount on document input', async () => {
    expect(await $('#output').getText()).toContain('document input no capture no passive: 0');
    const input = await $('#test-input');
    await input.waitForExist({ timeout: 3000 });
    await input.setValue('test');
    expect(await $('#output').getText()).toContain('document input no capture no passive: 4');
  });
});
