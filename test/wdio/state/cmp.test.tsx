import { $, expect } from '@wdio/globals';
import { h, Fragment } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';

describe('state', () => {
  beforeEach(() => {
    render({
      template: () => (
        <Fragment>
          <state-string-no-default-cmp></state-string-no-default-cmp>
          <state-boolean-no-default-cmp></state-boolean-no-default-cmp>
          <state-number-no-default-cmp></state-number-no-default-cmp>
          <state-string-default-cmp></state-string-default-cmp>
          <state-boolean-default-cmp></state-boolean-default-cmp>
          <state-number-default-cmp></state-number-default-cmp>
          <state-any-cmp></state-any-cmp>
          <state-any-default-cmp></state-any-default-cmp>
          <state-array-cmp></state-array-cmp>
          <state-array-default-cmp></state-array-default-cmp>
          <state-object-cmp></state-object-cmp>
          <state-object-default-cmp></state-object-default-cmp>
        </Fragment>
      ),
    });
  });

  it('should change state for string with no default', async () => {
    const cmp = await $('state-string-no-default-cmp');
    await expect(cmp.$('p')).toHaveText('State string:');

    const button = await cmp.$('button');
    await button.click();

    await expect(cmp.$('p')).toHaveText('State string: changed');
  });

  it('should change state for boolean with no default', async () => {
    const cmp = await $('state-boolean-no-default-cmp');
    await expect(cmp.$('p')).toHaveText('State boolean: undefined');

    const button = await cmp.$('button');
    await button.click();

    await expect(cmp.$('p')).toHaveText('State boolean: true');
  });

  it('should change state for number with no default', async () => {
    const cmp = await $('state-number-no-default-cmp');
    await expect(cmp.$('p')).toHaveText('State number:');

    const button = await cmp.$('button');
    await button.click();

    await expect(cmp.$('p')).toHaveText('State number: 99');
  });

  it('should change state for string with default', async () => {
    const cmp = await $('state-string-default-cmp');
    await expect(cmp.$('p')).toHaveText('State string: initial');

    const button = await cmp.$('button');
    await button.click();

    await expect(cmp.$('p')).toHaveText('State string: changed');
  });

  it('should change state for boolean with default', async () => {
    const cmp = await $('state-boolean-default-cmp');
    await expect(cmp.$('p')).toHaveText('State boolean: false');

    const button = await cmp.$('button');
    await button.click();

    await expect(cmp.$('p')).toHaveText('State boolean: true');
  });

  it('should change state for number with default', async () => {
    const cmp = await $('state-number-default-cmp');
    await expect(cmp.$('p')).toHaveText('State number: 42');

    const button = await cmp.$('button');
    await button.click();

    await expect(cmp.$('p')).toHaveText('State number: 99');
  });

  it('should handle any state', async () => {
    const cmp = await $('state-any-cmp');
    await expect(cmp.$('div')).toHaveText('');
    // Note: we do not test changing the value of `any` type states
  });

  it('should handle any state with a default', async () => {
    const cmp = await $('state-any-default-cmp');
    await expect(cmp.$('div')).toHaveText('default');
    // Note: we do not test changing the value of `any` type states
  });

  it('should handle array state', async () => {
    const cmp = await $('state-array-cmp');
    await expect(cmp.$('div')).toHaveText('');
    // Note: we do not test changing the value of array states
  });

  it('should handle array state with a default', async () => {
    const cmp = await $('state-array-default-cmp');
    await expect(cmp.$('div')).toHaveText('[1,2,3]');
    // Note: we do not test changing the value of array states
  });

  it('should handle object state', async () => {
    const cmp = await $('state-object-cmp');
    await expect(cmp.$('div')).toHaveText('');
    // Note: we do not test changing the value of object states
  });

  it('should handle object state with a default', async () => {
    const cmp = await $('state-object-default-cmp');
    await expect(cmp.$('div')).toHaveText('{"a":1}');
    // Note: we do not test changing the value of object states
  });
});
