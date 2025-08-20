import { $, expect } from '@wdio/globals';

import { h, Fragment } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';

describe('prop-no-mutable', () => {
  beforeEach(async () => {
    await render({
      template: () => (
        <Fragment>
          <prop-no-mutable-set-cmp></prop-no-mutable-set-cmp>
          <prop-no-mutable-object-cmp></prop-no-mutable-object-cmp>
          <prop-no-mutable-reflect-set-cmp></prop-no-mutable-reflect-set-cmp>
        </Fragment>
      ),
    });
  });

  it('should not mutate the set prop', async () => {
    const cmp = await $('prop-no-mutable-set-cmp');
    const button = await cmp.$('button');
    await button.click();

    // Verify the prop value hasn't changed
    const propTextElement = await cmp.$('p'); // First p element
    await expect(propTextElement).toHaveText('mySet: [1,2,3]');
  });

  it('should not mutate the object prop', async () => {
    const cmp = await $('prop-no-mutable-object-cmp');
    const button = await cmp.$('button');
    await button.click();

    // Verify the prop value hasn't changed
    const propTextElement = await cmp.$('p'); // First p element
    await expect(propTextElement).toHaveText('myObject: {"a":1,"b":2}');
  });

  it('should not mutate the reflect set prop', async () => {
    const cmp = await $('prop-no-mutable-reflect-set-cmp');
    const button = await cmp.$('button');
    await button.click();

    // Verify the prop value hasn't changed
    const propTextElement = await cmp.$('p'); // First p element
    await expect(propTextElement).toHaveText('mySet: [1,2,3]');
  });
});
