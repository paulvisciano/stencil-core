import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';

describe('cmp-document-input-capture-passive', () => {
  beforeEach(() => {
    render({
      template: () => <cmp-document-input-capture-passive></cmp-document-input-capture-passive>,
    });
  });

  it('should increment inputCount on input', async () => {
    expect(await $('#output').getText()).toContain('document input capture passive: 0');
    const input = await $('#test-input');
    await input.waitForExist({ timeout: 3000 });
    await input.setValue('t');
    expect(await $('#output').getText()).toContain('document input capture passive: 1');
  });
});
