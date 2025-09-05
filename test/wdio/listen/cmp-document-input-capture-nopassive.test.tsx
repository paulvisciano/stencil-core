import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';

describe('cmp-document-input-capture-nopassive', () => {
  beforeEach(() => {
    render({
      template: () => <cmp-document-input-capture-nopassive></cmp-document-input-capture-nopassive>,
    });
  });

  it('should increment inputCount on input', async () => {
    expect(await $('#output').getText()).toContain('document input capture nopassive: 0');
    const input = await $('#test-input');
    await input.waitForExist({ timeout: 3000 });
    await input.setValue('t');
    expect(await $('#output').getText()).toContain('document input capture nopassive: 1');
  });
});
