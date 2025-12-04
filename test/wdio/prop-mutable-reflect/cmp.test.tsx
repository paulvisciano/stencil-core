import { $, expect, browser } from '@wdio/globals';
import { h, Fragment } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';

describe('prop-mutable-reflect', () => {
  beforeEach(() => {
    render({
      template: () => (
        <Fragment>
          <prop-mutable-reflect-boolean-cmp></prop-mutable-reflect-boolean-cmp>
          <prop-mutable-reflect-string-cmp></prop-mutable-reflect-string-cmp>
          <prop-mutable-reflect-number-cmp></prop-mutable-reflect-number-cmp>
          <prop-mutable-reflect-array-cmp></prop-mutable-reflect-array-cmp>
          <prop-mutable-reflect-object-cmp></prop-mutable-reflect-object-cmp>
          <prop-mutable-reflect-set-cmp></prop-mutable-reflect-set-cmp>
        </Fragment>
      ),
    });
  });

  it('should mutate and reflect boolean prop', async () => {
    const cmp = await $('prop-mutable-reflect-boolean-cmp');
    await expect(cmp.$('p')).toHaveText('mutableReflect: false');
    await expect(cmp).not.toHaveAttribute('mutable-reflect');

    const button = await cmp.$('button');
    await button.click();

    await expect(cmp.$('p')).toHaveText('mutableReflect: true');
    await expect(cmp).toHaveAttribute('mutable-reflect');
  });

  it('should mutate and reflect string prop', async () => {
    const cmp = await $('prop-mutable-reflect-string-cmp');
    await expect(cmp.$('p')).toHaveText('mutableReflectString: initial');
    await expect(cmp).toHaveAttribute('mutable-reflect-string', 'initial');

    const button = await cmp.$('button');
    await button.click();

    await expect(cmp.$('p')).toHaveText('mutableReflectString: changed');
    await expect(cmp).toHaveAttribute('mutable-reflect-string', 'changed');
  });

  it('should mutate and reflect number prop', async () => {
    const cmp = await $('prop-mutable-reflect-number-cmp');
    await expect(cmp.$('p')).toHaveText('mutableReflectNumber: 1');
    await expect(cmp).toHaveAttribute('mutable-reflect-number', '1');

    const button = await cmp.$('button');
    await button.click();

    await expect(cmp.$('p')).toHaveText('mutableReflectNumber: 2');
    await expect(cmp).toHaveAttribute('mutable-reflect-number', '2');
  });

  it('should mutate and reflect array prop', async () => {
    const cmp = await $('prop-mutable-reflect-array-cmp');
    await expect(cmp.$('p')).toHaveText('mutableReflectArray: [1,2,3]');
    // TODO(STENCIL-123): Fix known issue where complex props are not reflected on initialization.
    await expect(cmp).not.toHaveAttribute('mutable-reflect-array');

    const button = await cmp.$('button');
    await button.click();

    await expect(cmp.$('p')).toHaveText('mutableReflectArray: [4,5,6]');
    // TODO(STENCIL-123): Fix known issue where complex props are not reflected after mutation.
    await expect(cmp).not.toHaveAttribute('mutable-reflect-array');
  });

  it('should mutate and reflect object prop', async () => {
    const cmp = await $('prop-mutable-reflect-object-cmp');
    await expect(cmp.$('p')).toHaveText('mutableReflectObject: {"a":1,"b":2}');
    // TODO(STENCIL-123): Fix known issue where complex props are not reflected on initialization.
    await expect(cmp).not.toHaveAttribute('mutable-reflect-object');

    const button = await cmp.$('button');
    await button.click();

    await expect(cmp.$('p')).toHaveText('mutableReflectObject: {"c":3,"d":4}');
    // TODO(STENCIL-123): Fix known issue where complex props are not reflected after mutation.
    await expect(cmp).not.toHaveAttribute('mutable-reflect-object');
  });

  it('should mutate and reflect set prop', async () => {
    const cmp = await $('prop-mutable-reflect-set-cmp');
    await expect(cmp.$('p')).toHaveText('mutableReflectSet: [1,2,3]');
    // TODO(STENCIL-123): Fix known issue where complex props are not reflected on initialization.
    await expect(cmp).not.toHaveAttribute('mutable-reflect-set');

    const button = await cmp.$('button');
    await button.click();

    await expect(cmp.$('p')).toHaveText('mutableReflectSet: [4,5,6]');
    // TODO(STENCIL-123): Fix known issue where complex props are not reflected after mutation.
    await expect(cmp).not.toHaveAttribute('mutable-reflect-set');
  });
});
