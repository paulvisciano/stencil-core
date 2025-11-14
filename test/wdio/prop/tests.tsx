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
          <prop-string-reflect-false-mutable-false val=""></prop-string-reflect-false-mutable-false>
          <prop-string-reflect-false-mutable val=""></prop-string-reflect-false-mutable>
          <prop-string-reflect-mutable-false val=""></prop-string-reflect-mutable-false>
          <prop-string-reflect-mutable val=""></prop-string-reflect-mutable>

          {/* number */}
          <prop-number-reflect-false-mutable-false val={0}></prop-number-reflect-false-mutable-false>
          <prop-number-reflect-false-mutable val={0}></prop-number-reflect-false-mutable>
          <prop-number-reflect-mutable-false val={0}></prop-number-reflect-mutable-false>
          <prop-number-reflect-mutable val={0}></prop-number-reflect-mutable>

          {/* boolean */}
          <prop-boolean-reflect-false-mutable-false val={false}></prop-boolean-reflect-false-mutable-false>
          <prop-boolean-reflect-false-mutable val={false}></prop-boolean-reflect-false-mutable>
          <prop-boolean-reflect-mutable-false val={false}></prop-boolean-reflect-mutable-false>
          <prop-boolean-reflect-mutable val={false}></prop-boolean-reflect-mutable>

          {/* Array */}
          <prop-array-reflect-false-mutable-false val={[]}></prop-array-reflect-false-mutable-false>
          <prop-array-reflect-false-mutable val={[]}></prop-array-reflect-false-mutable>
          <prop-array-reflect-mutable-false val={[]}></prop-array-reflect-mutable-false>
          <prop-array-reflect-mutable val={[]}></prop-array-reflect-mutable>

          {/* Object */}
          <prop-object-reflect-false-mutable-false val={{}}></prop-object-reflect-false-mutable-false>
          <prop-object-reflect-false-mutable val={{}}></prop-object-reflect-false-mutable>
          <prop-object-reflect-mutable-false val={{}}></prop-object-reflect-mutable-false>
          <prop-object-reflect-mutable val={{}}></prop-object-reflect-mutable>

          {/* Set */}
          <prop-set-reflect-false-mutable-false val={new Set()}></prop-set-reflect-false-mutable-false>
          <prop-set-reflect-false-mutable val={new Set()}></prop-set-reflect-false-mutable>
          <prop-set-reflect-mutable-false val={new Set()}></prop-set-reflect-mutable-false>
          <prop-set-reflect-mutable val={new Set()}></prop-set-reflect-mutable>
        </Fragment>
      ),
    });
  });

  describe('Test Case #1 – Primitive runtime coverage', () => {
    it('renders string reflect+mutable default content', async () => {
      const cmp = await $('prop-string-reflect-mutable');
  await expect(cmp.$('p:nth-child(1)')).toHaveText('Type: string | reflect: true | mutable: true');
  await expect(cmp.$('p:nth-child(2)')).toHaveText('Value: init');
    });

    it('renders number reflect+mutable default content', async () => {
      const cmp = await $('prop-number-reflect-mutable');
  await expect(cmp.$('p:nth-child(1)')).toHaveText('Type: number | reflect: true | mutable: true');
  await expect(cmp.$('p:nth-child(2)')).toHaveText('Value: 0');
    });

    it('renders boolean reflect+mutable default content', async () => {
      const cmp = await $('prop-boolean-reflect-mutable');
  await expect(cmp.$('p:nth-child(1)')).toHaveText('Type: boolean | reflect: true | mutable: true');
  await expect(cmp.$('p:nth-child(2)')).toHaveText('Value: false');
    });
  });

  describe('Test Case #2 – Complex static render', () => {
    it('renders array/object/set statically', async () => {
  await expect((await $('prop-array-reflect-mutable')).$('p:nth-child(1)')).toHaveText('Type: Array | reflect: true | mutable: true');
  await expect((await $('prop-array-reflect-mutable')).$('p:nth-child(2)')).toHaveText('Value: []');

  await expect((await $('prop-object-reflect-mutable')).$('p:nth-child(1)')).toHaveText('Type: Object | reflect: true | mutable: true');
  await expect((await $('prop-object-reflect-mutable')).$('p:nth-child(2)')).toHaveText('Value: {}');

  await expect((await $('prop-set-reflect-mutable')).$('p:nth-child(1)')).toHaveText('Type: Set | reflect: true | mutable: true');
  await expect((await $('prop-set-reflect-mutable')).$('p:nth-child(2)')).toHaveText('Value:');
    });
  });

  describe('Test Case #3 – reflect=true (primitives)', () => {
    it('reflects attribute when reflect=true (string)', async () => {
      const selector = 'prop-string-reflect-mutable';
      const cmp = await $(selector);
      await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        el.val = 'hello';
      }, selector);
  await expect(cmp.$('p:nth-child(2)')).toHaveText('Value: hello');
      await expect(cmp).toHaveAttribute('val', 'hello');
    });

    it('reflects number as string when reflect=true', async () => {
      const selector = 'prop-number-reflect-mutable';
      const cmp = await $(selector);
      await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        el.val = 42;
      }, selector);
  await expect(cmp.$('p:nth-child(2)')).toHaveText('Value: 42');
      await expect(cmp).toHaveAttribute('val', '42');
    });

    it('reflects boolean as attribute presence when reflect=true', async () => {
      const selector = 'prop-boolean-reflect-mutable';
      const cmp = await $(selector);
      await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        el.val = true;
      }, selector);
  await expect(cmp.$('p:nth-child(2)')).toHaveText('Value: true');
      await expect(cmp).toHaveAttribute('val');
    });
  });

  describe('Test Case #4 – reflect=false (primitives)', () => {
    it('does not reflect attribute when reflect=false (string)', async () => {
      const selector = 'prop-string-reflect-false-mutable';
      const cmp = await $(selector);
      await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        el.val = 'world';
      }, selector);
  await expect(cmp.$('p:nth-child(2)')).toHaveText('Value: world');
      await expect(cmp).not.toHaveAttribute('val');
    });

    it('does not reflect number when reflect=false', async () => {
      const selector = 'prop-number-reflect-false-mutable';
      const cmp = await $(selector);
      await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        el.val = 7;
      }, selector);
  await expect(cmp.$('p:nth-child(2)')).toHaveText('Value: 7');
      await expect(cmp).not.toHaveAttribute('val');
    });
  });

  describe('Test Case #5 – mutable=true (primitives)', () => {
    it('allows component to mutate its own string prop', async () => {
      const selector = 'prop-string-reflect-mutable';
      const cmp = await $(selector);
      await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        el.val = 'first';
        el.val = 'second';
      }, selector);
  await expect(cmp.$('p:nth-child(2)')).toHaveText('Value: second');
      await expect(cmp).toHaveAttribute('val', 'second');
    });

    it('allows component to mutate its own number prop', async () => {
      const selector = 'prop-number-reflect-mutable';
      const cmp = await $(selector);
      await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        el.val = 1;
        el.val = 2;
      }, selector);
  await expect(cmp.$('p:nth-child(2)')).toHaveText('Value: 2');
      await expect(cmp).toHaveAttribute('val', '2');
    });

    it('allows component to mutate its own boolean prop', async () => {
      const selector = 'prop-boolean-reflect-mutable';
      const cmp = await $(selector);
      await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        el.val = true;
        el.val = false;
        el.val = true;
      }, selector);
  await expect(cmp.$('p:nth-child(2)')).toHaveText('Value: true');
      await expect(cmp).toHaveAttribute('val');
    });
  });
});
