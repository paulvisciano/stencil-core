import { $, expect, browser } from '@wdio/globals';
import { h, Fragment } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';

describe('@Prop decorator', () => {
  before(async () => {
    render({
      components: [],
      template: () => (
        <Fragment>
          {/* string */}
          <prop-string-reflect-false-mutable-false></prop-string-reflect-false-mutable-false>
          <prop-string-reflect-false-mutable></prop-string-reflect-false-mutable>
          <prop-string-reflect-mutable-false></prop-string-reflect-mutable-false>
          <prop-string-reflect-mutable></prop-string-reflect-mutable>

          {/* number */}
          <prop-number-reflect-false-mutable-false></prop-number-reflect-false-mutable-false>
          <prop-number-reflect-false-mutable></prop-number-reflect-false-mutable>
          <prop-number-reflect-mutable-false></prop-number-reflect-mutable-false>
          <prop-number-reflect-mutable></prop-number-reflect-mutable>

          {/* boolean */}
          <prop-boolean-reflect-false-mutable-false></prop-boolean-reflect-false-mutable-false>
          <prop-boolean-reflect-false-mutable></prop-boolean-reflect-false-mutable>
          <prop-boolean-reflect-mutable-false></prop-boolean-reflect-mutable-false>
          <prop-boolean-reflect-mutable></prop-boolean-reflect-mutable>

          {/* Array */}
          <prop-array-reflect-false-mutable-false></prop-array-reflect-false-mutable-false>
          <prop-array-reflect-false-mutable></prop-array-reflect-false-mutable>
          <prop-array-reflect-mutable-false></prop-array-reflect-mutable-false>
          <prop-array-reflect-mutable></prop-array-reflect-mutable>

          {/* Object */}
          <prop-object-reflect-false-mutable-false></prop-object-reflect-false-mutable-false>
          <prop-object-reflect-false-mutable></prop-object-reflect-false-mutable>
          <prop-object-reflect-mutable-false></prop-object-reflect-mutable-false>
          <prop-object-reflect-mutable></prop-object-reflect-mutable>

          {/* Set */}
          <prop-set-reflect-false-mutable-false></prop-set-reflect-false-mutable-false>
          <prop-set-reflect-false-mutable></prop-set-reflect-false-mutable>
          <prop-set-reflect-mutable-false></prop-set-reflect-mutable-false>
          <prop-set-reflect-mutable></prop-set-reflect-mutable>
        </Fragment>
      ),
    });
  });

  describe('Test Case #1 – Primitive runtime coverage', () => {
    it('renders string reflect+mutable default content', async () => {
      const cmp = await $('prop-string-reflect-mutable');
      await expect(cmp.$('p:nth-child(2)')).toHaveText('Type: string | reflect: true | mutable: true');
      await expect(cmp.$('p:nth-child(3)')).toHaveText('Value: init');
    });

    it('renders number reflect+mutable default content', async () => {
      const cmp = await $('prop-number-reflect-mutable');
      await expect(cmp.$('p:nth-child(2)')).toHaveText('Type: number | reflect: true | mutable: true');
      await expect(cmp.$('p:nth-child(3)')).toHaveText('Value: 0');
    });

    it('renders boolean reflect+mutable default content', async () => {
      const cmp = await $('prop-boolean-reflect-mutable');
      await expect(cmp.$('p:nth-child(2)')).toHaveText('Type: boolean | reflect: true | mutable: true');
      await expect(cmp.$('p:nth-child(3)')).toHaveText('Value: false');
    });
  });

  describe('Test Case #2 – Complex static render', () => {
    it('renders array/object/set statically', async () => {
      await expect((await $('prop-array-reflect-mutable')).$('p:nth-child(2)')).toHaveText('Type: Array | reflect: true | mutable: true');
      await expect((await $('prop-array-reflect-mutable')).$('p:nth-child(3)')).toHaveText('Value: []');

      await expect((await $('prop-object-reflect-mutable')).$('p:nth-child(2)')).toHaveText('Type: Object | reflect: true | mutable: true');
      await expect((await $('prop-object-reflect-mutable')).$('p:nth-child(3)')).toHaveText('Value: {}');

      await expect((await $('prop-set-reflect-mutable')).$('p:nth-child(2)')).toHaveText('Type: Set | reflect: true | mutable: true');
      await expect((await $('prop-set-reflect-mutable')).$('p:nth-child(3)')).toHaveText('Value: ');
    });
  });

  describe('Test Case #3 – reflect=true (primitives)', () => {
    it('reflects attribute when reflect=true (string)', async () => {
      const selector = 'prop-string-reflect-mutable';
      const cmp = await $(selector);
      await browser.execute((sel) => {
        const el: any = document.querySelector(sel);
        el.val = 'hello';
      }, selector);
      await expect(cmp.$('p:nth-child(3)')).toHaveText('Value: hello');
      await expect(cmp).toHaveAttribute('val', 'hello');
    });

    it('reflects number as string when reflect=true', async () => {
      const selector = 'prop-number-reflect-mutable';
      const cmp = await $(selector);
      await browser.execute((sel) => {
        const el: any = document.querySelector(sel);
        el.val = 42;
      }, selector);
      await expect(cmp.$('p:nth-child(3)')).toHaveText('Value: 42');
      await expect(cmp).toHaveAttribute('val', '42');
    });

    it('reflects boolean as attribute presence when reflect=true', async () => {
      const selector = 'prop-boolean-reflect-mutable';
      const cmp = await $(selector);
      await browser.execute((sel) => {
        const el: any = document.querySelector(sel);
        el.val = true;
      }, selector);
      await expect(cmp.$('p:nth-child(3)')).toHaveText('Value: true');
      await expect(cmp).toHaveAttribute('val');
    });
  });

  describe('Test Case #4 – reflect=false (primitives)', () => {
    it('does not reflect attribute when reflect=false (string)', async () => {
      const selector = 'prop-string-reflect-false-mutable';
      const cmp = await $(selector);
      await browser.execute((sel) => {
        const el: any = document.querySelector(sel);
        el.val = 'world';
      }, selector);
      await expect(cmp.$('p:nth-child(3)')).toHaveText('Value: world');
      await expect(cmp).not.toHaveAttribute('val');
    });

    it('does not reflect number when reflect=false', async () => {
      const selector = 'prop-number-reflect-false-mutable';
      const cmp = await $(selector);
      await browser.execute((sel) => {
        const el: any = document.querySelector(sel);
        el.val = 7;
      }, selector);
      await expect(cmp.$('p:nth-child(3)')).toHaveText('Value: 7');
      await expect(cmp).not.toHaveAttribute('val');
    });
  });

  describe('Test Case #5 – mutable=true (primitives)', () => {
    it('allows component to mutate its own string prop', async () => {
      const selector = 'prop-string-reflect-mutable';
      const cmp = await $(selector);
      await browser.execute((sel) => {
        const el: any = document.querySelector(sel);
        el.val = 'first';
        el.val = 'second';
      }, selector);
      await expect(cmp.$('p:nth-child(3)')).toHaveText('Value: second');
      await expect(cmp).toHaveAttribute('val', 'second');
    });

    it('allows component to mutate its own number prop', async () => {
      const selector = 'prop-number-reflect-mutable';
      const cmp = await $(selector);
      await browser.execute((sel) => {
        const el: any = document.querySelector(sel);
        el.val = 1;
        el.val = 2;
      }, selector);
      await expect(cmp.$('p:nth-child(3)')).toHaveText('Value: 2');
      await expect(cmp).toHaveAttribute('val', '2');
    });

    it('allows component to mutate its own boolean prop', async () => {
      const selector = 'prop-boolean-reflect-mutable';
      const cmp = await $(selector);
      await browser.execute((sel) => {
        const el: any = document.querySelector(sel);
        el.val = true;
        el.val = false;
        el.val = true;
      }, selector);
      await expect(cmp.$('p:nth-child(3)')).toHaveText('Value: true');
      await expect(cmp).toHaveAttribute('val');
    });
  });
});
