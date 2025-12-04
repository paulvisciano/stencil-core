import { h, Fragment } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';
import { $, expect } from '@wdio/globals';

describe('prop-mutable', () => {
  beforeEach(() => {
    render({
      template: () => (
        <>
          <prop-mutable-boolean-cmp></prop-mutable-boolean-cmp>
          <prop-mutable-string-cmp></prop-mutable-string-cmp>
          <prop-mutable-number-cmp></prop-mutable-number-cmp>
          <prop-mutable-array-cmp></prop-mutable-array-cmp>
          <prop-mutable-object-cmp></prop-mutable-object-cmp>
          <prop-mutable-set-cmp></prop-mutable-set-cmp>
        </>
      ),
    });
  });

  it('should mutate boolean prop', async () => {
    const cmp = await $('prop-mutable-boolean-cmp');
    await expect(cmp.$('p')).toHaveText('mutableFalse: false');
    const button = await cmp.$('button');
    await button.click();
    await expect(cmp.$('p')).toHaveText('mutableFalse: true');
  });

  it('should mutate string prop', async () => {
    const cmp = await $('prop-mutable-string-cmp');
    await expect(cmp.$('p')).toHaveText('mutableString: initial');
    const button = await cmp.$('button');
    await button.click();
    await expect(cmp.$('p')).toHaveText('mutableString: changed');
  });

  it('should mutate number prop', async () => {
    const cmp = await $('prop-mutable-number-cmp');
    await expect(cmp.$('p')).toHaveText('mutableNumber: 1');
    const button = await cmp.$('button');
    await button.click();
    await expect(cmp.$('p')).toHaveText('mutableNumber: 2');
  });

  it('should mutate array prop', async () => {
    const cmp = await $('prop-mutable-array-cmp');
    await expect(cmp.$('p')).toHaveText('mutableArray: [1,2,3]');
    const button = await cmp.$('button');
    await button.click();
    await expect(cmp.$('p')).toHaveText('mutableArray: [4,5,6]');
  });

  it('should mutate object prop', async () => {
    const cmp = await $('prop-mutable-object-cmp');
    await expect(cmp.$('p')).toHaveText('mutableObject: {"a":1,"b":2}');
    const button = await cmp.$('button');
    await button.click();
    await expect(cmp.$('p')).toHaveText('mutableObject: {"c":3,"d":4}');
  });

  it('should mutate set prop', async () => {
    const cmp = await $('prop-mutable-set-cmp');
    await expect(cmp.$('p')).toHaveText('mutableSet: [1,2,3]');
    const button = await cmp.$('button');
    await button.click();
    await expect(cmp.$('p')).toHaveText('mutableSet: [4,5,6]');
  });
});
