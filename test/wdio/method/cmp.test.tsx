import { $, browser } from '@wdio/globals';
import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';

describe('method-async-args-return-cmp', () => {
  beforeEach(async () => {
    render({
      components: [],
      template: () => <method-async-args-return-cmp></method-async-args-return-cmp>
    });
  });
 

  it('should update result in DOM after button click', async () => {
    const elm = await $('method-async-args-return-cmp');
    await elm.waitForExist();
    const button = await elm.$('button');
    await button.click();
    const resultSpan = await elm.$('#result');
    await browser.waitUntil(async () => {
      return (await resultSpan.getText()) === 'async test';
    }, { timeout: 3000 });
    expect(await resultSpan.getText()).toBe('async test');
  });
});

describe('method-async-args-no-return-cmp', () => {
  beforeEach(async () => {
    render({
      components: [],
      template: () => <method-async-args-no-return-cmp></method-async-args-no-return-cmp>
    });
  });
  it('should update called in DOM after button click', async () => {
    const elm = await $('method-async-args-no-return-cmp');
    await elm.waitForExist();
    const button = await elm.$('button');
    await button.click();
    const span = await elm.$('span');
    await browser.waitUntil(async () => {
      return (await span.getText()) === 'called';
    }, { timeout: 3000 });
    expect(await span.getText()).toBe('called');
  });
});

describe('method-async-noargs-return-cmp', () => {
  beforeEach(async () => {
    render({
      components: [],
      template: () => <method-async-noargs-return-cmp></method-async-noargs-return-cmp>
    });
  });
  it('should update result in DOM after button click', async () => {
    const elm = await $('method-async-noargs-return-cmp');
    await elm.waitForExist();
    const button = await elm.$('button');
    await button.click();
    const span = await elm.$('span');
    await browser.waitUntil(async () => {
      return (await span.getText()) === 'success';
    }, { timeout: 3000 });
    expect(await span.getText()).toBe('success');
  });
});

describe('method-async-noargs-no-return-cmp', () => {
  beforeEach(async () => {
    render({
      components: [],
      template: () => <method-async-noargs-no-return-cmp></method-async-noargs-no-return-cmp>
    });
  });
  it('should update called in DOM after button click', async () => {
    const elm = await $('method-async-noargs-no-return-cmp');
    await elm.waitForExist();
    const button = await elm.$('button');
    await button.click();
    const span = await elm.$('span');
    await browser.waitUntil(async () => {
      return (await span.getText()) === 'called';
    }, { timeout: 3000 });
    expect(await span.getText()).toBe('called');
  });
});
