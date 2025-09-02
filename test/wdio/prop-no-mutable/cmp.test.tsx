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
    it('should not mutate the boolean prop from inside', async () => {
      const cmp = await $('prop-no-mutable-boolean-cmp');
      const button = await cmp.$('button');
      if (await button.isExisting()) {
        await button.click();
      }
      await expect(cmp.$('p')).toHaveText('myBool: false');
    });

    it('should not mutate the string prop from inside', async () => {
      const cmp = await $('prop-no-mutable-string-cmp');
      const button = await cmp.$('button');
      if (await button.isExisting()) {
        await button.click();
      }
      await expect(cmp.$('p')).toHaveText('myString: initial');
    });

    it('should not mutate the number prop from inside', async () => {
      const cmp = await $('prop-no-mutable-number-cmp');
      const button = await cmp.$('button');
      if (await button.isExisting()) {
        await button.click();
      }
      await expect(cmp.$('p')).toHaveText('myNumber: 1');
    });

    it('should not mutate the array prop from inside', async () => {
      const cmp = await $('prop-no-mutable-array-cmp');
      const button = await cmp.$('button');
      if (await button.isExisting()) {
        await button.click();
      }
      await expect(cmp.$('p')).toHaveText('myArray: [1,2,3]');
    });

    it('should not mutate the set prop from inside', async () => {
      const cmp = await $('prop-no-mutable-set-cmp');
      const button = await cmp.$('button');
      if (await button.isExisting()) {
        await button.click();
      }
      await expect(cmp.$('p')).toHaveText('mySet: [1,2,3]');
    });

    it('should not mutate the object prop from inside', async () => {
      const cmp = await $('prop-no-mutable-object-cmp');
      const button = await cmp.$('button');
      if (await button.isExisting()) {
        await button.click();
      }
      await expect(cmp.$('p')).toHaveText('myObject: {"a":1,"b":2}');
    });

    it('should not mutate the reflect set prop from inside', async () => {
      const cmp = await $('prop-no-mutable-reflect-set-cmp');
      const button = await cmp.$('button');
      if (await button.isExisting()) {
        await button.click();
      }
      await expect(cmp.$('p')).toHaveText('mySet: [1,2,3]');
    });
  });

  describe('External mutation (direct property assignment)', () => {
    it('should not mutate the boolean prop from outside', async () => {
      const cmp = await $('prop-no-mutable-boolean-cmp');
      await browser.execute(() => {
        const el = document.querySelector('prop-no-mutable-boolean-cmp');
        if (el) {
          el.myBool = true;
        }
      });
      await expect(cmp.$('p')).toHaveText('myBool: false');
    });

    it('should not mutate the string prop from outside', async () => {
      const cmp = await $('prop-no-mutable-string-cmp');
      await browser.execute(() => {
        const el = document.querySelector('prop-no-mutable-string-cmp');
        if (el) {
          el.myString = 'mutated';
        }
      });
      await expect(cmp.$('p')).toHaveText('myString: initial');
    });

    it('should not mutate the number prop from outside', async () => {
      const cmp = await $('prop-no-mutable-number-cmp');
      await browser.execute(() => {
        const el = document.querySelector('prop-no-mutable-number-cmp');
        if (el) {
          el.myNumber = 42;
        }
      });
      await expect(cmp.$('p')).toHaveText('myNumber: 1');
    });

    it('should not mutate the array prop from outside', async () => {
      const cmp = await $('prop-no-mutable-array-cmp');
      await browser.execute(() => {
        const el = document.querySelector('prop-no-mutable-array-cmp');
        if (el) {
          el.myArray = [4,5,6];
        }
      });
      await expect(cmp.$('p')).toHaveText('myArray: [1,2,3]');
    });

    it('should not mutate the set prop from outside', async () => {
      const cmp = await $('prop-no-mutable-set-cmp');
      await browser.execute(() => {
        const el = document.querySelector('prop-no-mutable-set-cmp');
        if (el) {
          el.mySet = new Set([4,5,6]);
        }
      });
      await expect(cmp.$('p')).toHaveText('mySet: [1,2,3]');
    });

    it('should not mutate the object prop from outside', async () => {
      const cmp = await $('prop-no-mutable-object-cmp');
      await browser.execute(() => {
        const el = document.querySelector('prop-no-mutable-object-cmp');
        if (el) {
          el.myObject = { a: 2, b: 3 };
        }
      });
      await expect(cmp.$('p')).toHaveText('myObject: {"a":1,"b":2}');
    });

    it('should not mutate the reflect set prop from outside', async () => {
      const cmp = await $('prop-no-mutable-reflect-set-cmp');
      await browser.execute(() => {
        const el = document.querySelector('prop-no-mutable-reflect-set-cmp');
        if (el) {
          el.mySet = new Set([4,5,6]);
        }
      });
      await expect(cmp.$('p')).toHaveText('mySet: [1,2,3]');
    });
  });
});
