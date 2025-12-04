import { $, expect, browser } from '@wdio/globals';
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
          <prop-no-mutable-boolean-cmp></prop-no-mutable-boolean-cmp>
          <prop-no-mutable-string-cmp></prop-no-mutable-string-cmp>
          <prop-no-mutable-number-cmp></prop-no-mutable-number-cmp>
          <prop-no-mutable-array-cmp></prop-no-mutable-array-cmp>
        </Fragment>
      ),
    });
  });

  describe('Internal mutation (button click)', () => {
    it('should mutate the boolean prop from inside', async () => {
      const cmp = await $('prop-no-mutable-boolean-cmp');
      const button = await cmp.$('button');
      if (await button.isExisting()) {
        await button.click();
      }
      await expect(cmp.$('p')).toHaveText('myBool: true');
    });

    it('should mutate the string prop from inside', async () => {
      const cmp = await $('prop-no-mutable-string-cmp');
      const button = await cmp.$('button');
      if (await button.isExisting()) {
        await button.click();
      }
      await expect(cmp.$('p')).toHaveText('myString: mutated');
    });

    it('should mutate the number prop from inside', async () => {
      const cmp = await $('prop-no-mutable-number-cmp');
      const button = await cmp.$('button');
      if (await button.isExisting()) {
        await button.click();
      }
      await expect(cmp.$('p')).toHaveText('myNumber: 42');
    });

    it('should mutate the array prop from inside', async () => {
      const cmp = await $('prop-no-mutable-array-cmp');
      const button = await cmp.$('button');
      if (await button.isExisting()) {
        await button.click();
      }
      await expect(cmp.$('p')).toHaveText('myArray: [4,5,6]');
    });

    it('should mutate the set prop from inside', async () => {
      const cmp = await $('prop-no-mutable-set-cmp');
      const button = await cmp.$('button');
      if (await button.isExisting()) {
        await button.click();
      }
      await expect(cmp.$('p')).toHaveText('mySet: [4,5,6]');
    });

    it('should mutate the object prop from inside', async () => {
      const cmp = await $('prop-no-mutable-object-cmp');
      const button = await cmp.$('button');
      if (await button.isExisting()) {
        await button.click();
      }
      await expect(cmp.$('p')).toHaveText('myObject: {"a":2,"b":3}');
    });

    it('should mutate the reflect set prop from inside', async () => {
      const cmp = await $('prop-no-mutable-reflect-set-cmp');
      const button = await cmp.$('button');
      if (await button.isExisting()) {
        await button.click();
      }
      await expect(cmp.$('p')).toHaveText('mySet: [4,5,6]');
    });
  });

  describe('External mutation (direct property assignment)', () => {
    beforeEach(async () => {
      // Re-render components to reset to initial state after internal mutation tests
      await render({
        template: () => (
          <Fragment>
            <prop-no-mutable-set-cmp></prop-no-mutable-set-cmp>
            <prop-no-mutable-object-cmp></prop-no-mutable-object-cmp>
            <prop-no-mutable-reflect-set-cmp></prop-no-mutable-reflect-set-cmp>
            <prop-no-mutable-boolean-cmp></prop-no-mutable-boolean-cmp>
            <prop-no-mutable-string-cmp></prop-no-mutable-string-cmp>
            <prop-no-mutable-number-cmp></prop-no-mutable-number-cmp>
            <prop-no-mutable-array-cmp></prop-no-mutable-array-cmp>
          </Fragment>
        ),
      });
    });

    it('should mutate the boolean prop from outside', async () => {
      const cmp = await $('prop-no-mutable-boolean-cmp');
      await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        if (el) {
          el.myBool = true;
        }
      }, 'prop-no-mutable-boolean-cmp');
      await expect(cmp.$('p')).toHaveText('myBool: true');
    });

    it('should mutate the string prop from outside', async () => {
      const cmp = await $('prop-no-mutable-string-cmp');
      await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        if (el) {
          el.myString = 'mutated';
        }
      }, 'prop-no-mutable-string-cmp');
      await expect(cmp.$('p')).toHaveText('myString: mutated');
    });

    it('should mutate the number prop from outside', async () => {
      const cmp = await $('prop-no-mutable-number-cmp');
      await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        if (el) {
          el.myNumber = 42;
        }
      }, 'prop-no-mutable-number-cmp');
      await expect(cmp.$('p')).toHaveText('myNumber: 42');
    });

    it('should mutate the array prop from outside', async () => {
      const cmp = await $('prop-no-mutable-array-cmp');
      await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        if (el) {
          el.myArray = [4,5,6];
        }
      }, 'prop-no-mutable-array-cmp');
      await expect(cmp.$('p')).toHaveText('myArray: [4,5,6]');
    });

    it('should mutate the set prop from outside', async () => {
      const cmp = await $('prop-no-mutable-set-cmp');
      await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        if (el) {
          el.mySet = new Set([4,5,6]);
        }
      }, 'prop-no-mutable-set-cmp');
      await expect(cmp.$('p')).toHaveText('mySet: [4,5,6]');
    });

    it('should mutate the object prop from outside', async () => {
      const cmp = await $('prop-no-mutable-object-cmp');
      await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        if (el) {
          el.myObject = { a: 2, b: 3 };
        }
      }, 'prop-no-mutable-object-cmp');
      await expect(cmp.$('p')).toHaveText('myObject: {"a":2,"b":3}');
    });

    it('should mutate the reflect set prop from outside', async () => {
      const cmp = await $('prop-no-mutable-reflect-set-cmp');
      await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        if (el) {
          el.mySet = new Set([4,5,6]);
        }
      }, 'prop-no-mutable-reflect-set-cmp');
      await expect(cmp.$('p')).toHaveText('mySet: [4,5,6]');
    });
  });
});
