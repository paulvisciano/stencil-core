import { $, expect } from '@wdio/globals';
import { h, Fragment } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';

describe('state-new matrix (@State)', () => {
  before(async () => {
    render({
      template: () => (
        <Fragment>
          {/* primitives: no-default */}
          <state-string-no-default></state-string-no-default>
          <state-boolean-no-default></state-boolean-no-default>
          <state-number-no-default></state-number-no-default>
          {/* primitives: default */}
          <state-string-default></state-string-default>
          <state-boolean-default></state-boolean-default>
          <state-number-default></state-number-default>
          {/* complex: any/array/object (no-default + default) */}
          <state-any-no-default></state-any-no-default>
          <state-any-default></state-any-default>
          <state-array-no-default></state-array-no-default>
          <state-array-default></state-array-default>
          <state-object-no-default></state-object-no-default>
          <state-object-default></state-object-default>
        </Fragment>
      ),
    });
  });

  // PRIMITIVES: string
  it('mutates string (no default) and updates DOM', async () => {
    const cmp = await $('state-string-no-default');
    await expect(cmp.$('p:nth-child(2)')).toHaveText('Value:');
    const button = await cmp.$('button');
    await button.click();
    await expect(cmp.$('p:nth-child(2)')).toHaveText('Value: changed');
  });

  it('mutates string (default) and updates DOM', async () => {
    const cmp = await $('state-string-default');
    await expect(cmp.$('p:nth-child(2)')).toHaveText('Value: initial');
    const button = await cmp.$('button');
    await button.click();
    await expect(cmp.$('p:nth-child(2)')).toHaveText('Value: changed');
  });

  // PRIMITIVES: boolean
  it('mutates boolean (no default) and updates DOM', async () => {
    const cmp = await $('state-boolean-no-default');
    await expect(cmp.$('p:nth-child(2)')).toHaveText('Value: false');
    const button = await cmp.$('button');
    await button.click();
    await expect(cmp.$('p:nth-child(2)')).toHaveText('Value: true');
  });

  it('mutates boolean (default) and updates DOM', async () => {
    const cmp = await $('state-boolean-default');
    await expect(cmp.$('p:nth-child(2)')).toHaveText('Value: false');
    const button = await cmp.$('button');
    await button.click();
    await expect(cmp.$('p:nth-child(2)')).toHaveText('Value: true');
  });

  // PRIMITIVES: number
  it('mutates number (no default) and updates DOM', async () => {
    const cmp = await $('state-number-no-default');
    await expect(cmp.$('p:nth-child(2)')).toHaveText('Value:');
    const button = await cmp.$('button');
    await button.click();
    await expect(cmp.$('p:nth-child(2)')).toHaveText('Value: NaN');
  });

  it('mutates number (default) and updates DOM', async () => {
    const cmp = await $('state-number-default');
    await expect(cmp.$('p:nth-child(2)')).toHaveText('Value: 0');
    const button = await cmp.$('button');
    await button.click();
    await expect(cmp.$('p:nth-child(2)')).toHaveText('Value: 1');
  });

  // COMPLEX TYPES: static render validation
  it('renders any (no default) statically', async () => {
    const cmp = await $('state-any-no-default');
    await expect(cmp.$('p:nth-child(2)')).toHaveText('Value: undefined');
  });

  it('renders any (default) statically', async () => {
    const cmp = await $('state-any-default');
    await expect(cmp.$('p:nth-child(2)')).toHaveText('Value: any');
  });

  it('renders array (no default) statically', async () => {
    const cmp = await $('state-array-no-default');
    await expect(cmp.$('p:nth-child(2)')).toHaveText('Value:');
  });

  it('renders array (default) statically', async () => {
    const cmp = await $('state-array-default');
    await expect(cmp.$('p:nth-child(2)')).toHaveText('Value: []');
  });

  it('renders object (no default) statically', async () => {
    const cmp = await $('state-object-no-default');
    await expect(cmp.$('p:nth-child(2)')).toHaveText('Value:');
  });

  it('renders object (default) statically', async () => {
    const cmp = await $('state-object-default');
    await expect(cmp.$('p:nth-child(2)')).toHaveText('Value: {}');
  });
});
