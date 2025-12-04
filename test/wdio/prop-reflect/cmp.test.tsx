import { h, Fragment } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';
import { $, expect } from '@wdio/globals';
import './boolean-cmp.js';
import './array-cmp.js';
import './set-cmp.js';
import './object-cmp.js';

describe('prop-reflect', () => {
  beforeEach(() => {
    render({
      components: [],
      template: () => (
        <Fragment>
          <prop-reflect-boolean></prop-reflect-boolean>
          <prop-reflect-array></prop-reflect-array>
          <prop-reflect-set></prop-reflect-set>
          <prop-reflect-object></prop-reflect-object>
          <button type="button">Set Props</button>
        </Fragment>
      ),
    });

    document.querySelector('button')?.addEventListener('click', () => {
      const boolCmp = document.querySelector('prop-reflect-boolean');
      if (boolCmp) {
        // For boolean props, setting the attribute to any string makes it true.
        boolCmp.setAttribute('val', '');
      }
      const arrayCmp = document.querySelector('prop-reflect-array');
      if (arrayCmp) {
        arrayCmp.setAttribute('val', '["a","b"]');
      }
      const setCmp = document.querySelector('prop-reflect-set');
      if (setCmp) {
        setCmp.setAttribute('val', '[1,2]');
      }
      const objectCmp = document.querySelector('prop-reflect-object');
      if (objectCmp) {
        objectCmp.setAttribute('val', '{"a":1}');
      }
    });
  });

  it('should reflect boolean property to attribute', async () => {
    const element = await $('prop-reflect-boolean');
    await $('button').click();
    await expect(element).toHaveAttribute('val', '');
  });

  it('should reflect array property to attribute', async () => {
    const element = await $('prop-reflect-array');
    await $('button').click();
    await expect(element).toHaveAttribute('val', '["a","b"]');
  });

  it('should reflect set property to attribute', async () => {
    const element = await $('prop-reflect-set');
    await $('button').click();
    await expect(element).toHaveAttribute('val', '[1,2]');
  });

  it('should reflect object property to attribute', async () => {
    const element = await $('prop-reflect-object');
    await $('button').click();
    await expect(element).toHaveAttribute('val', '{"a":1}');
  });
});
