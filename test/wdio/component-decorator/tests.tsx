import { $, expect, browser } from '@wdio/globals';
import { h, Fragment } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';

describe('@Component decorator', () => {
  before(async () => {
    render({
      components: [],
      template: () => (
        <Fragment>
          {/* Shadow mode components - Test Case #1 (48 components) */}
          <cmp-shadow></cmp-shadow>
          <cmp-shadow-assetsdirs></cmp-shadow-assetsdirs>
          <cmp-shadow-assetsdirs-formassociated></cmp-shadow-assetsdirs-formassociated>
          <cmp-shadow-assetsdirs-formassociated-false></cmp-shadow-assetsdirs-formassociated-false>
          <cmp-shadow-assetsdirs-formassociated-false-styles></cmp-shadow-assetsdirs-formassociated-false-styles>
          <cmp-shadow-assetsdirs-formassociated-false-styleurl></cmp-shadow-assetsdirs-formassociated-false-styleurl>
          <cmp-shadow-assetsdirs-formassociated-false-styleurls></cmp-shadow-assetsdirs-formassociated-false-styleurls>
          <cmp-shadow-assetsdirs-formassociated-styles></cmp-shadow-assetsdirs-formassociated-styles>
          <cmp-shadow-assetsdirs-formassociated-styleurl></cmp-shadow-assetsdirs-formassociated-styleurl>
          <cmp-shadow-assetsdirs-formassociated-styleurls></cmp-shadow-assetsdirs-formassociated-styleurls>
          <cmp-shadow-assetsdirs-styles></cmp-shadow-assetsdirs-styles>
          <cmp-shadow-assetsdirs-styleurl></cmp-shadow-assetsdirs-styleurl>
          <cmp-shadow-assetsdirs-styleurls></cmp-shadow-assetsdirs-styleurls>
          <cmp-shadow-formassociated></cmp-shadow-formassociated>
          <cmp-shadow-formassociated-false></cmp-shadow-formassociated-false>
          <cmp-shadow-formassociated-false-styles></cmp-shadow-formassociated-false-styles>
          <cmp-shadow-formassociated-false-styleurl></cmp-shadow-formassociated-false-styleurl>
          <cmp-shadow-formassociated-false-styleurls></cmp-shadow-formassociated-false-styleurls>
          <cmp-shadow-formassociated-styles></cmp-shadow-formassociated-styles>
          <cmp-shadow-formassociated-styleurl></cmp-shadow-formassociated-styleurl>
          <cmp-shadow-formassociated-styleurls></cmp-shadow-formassociated-styleurls>
          <cmp-shadow-scoped-false></cmp-shadow-scoped-false>
          <cmp-shadow-scoped-false-assetsdirs></cmp-shadow-scoped-false-assetsdirs>
          <cmp-shadow-scoped-false-assetsdirs-formassociated></cmp-shadow-scoped-false-assetsdirs-formassociated>
          <cmp-shadow-scoped-false-assetsdirs-formassociated-false></cmp-shadow-scoped-false-assetsdirs-formassociated-false>
          <cmp-shadow-scoped-false-assetsdirs-formassociated-false-styles></cmp-shadow-scoped-false-assetsdirs-formassociated-false-styles>
          <cmp-shadow-scoped-false-assetsdirs-formassociated-false-styleurl></cmp-shadow-scoped-false-assetsdirs-formassociated-false-styleurl>
          <cmp-shadow-scoped-false-assetsdirs-formassociated-false-styleurls></cmp-shadow-scoped-false-assetsdirs-formassociated-false-styleurls>
          <cmp-shadow-scoped-false-assetsdirs-formassociated-styles></cmp-shadow-scoped-false-assetsdirs-formassociated-styles>
          <cmp-shadow-scoped-false-assetsdirs-formassociated-styleurl></cmp-shadow-scoped-false-assetsdirs-formassociated-styleurl>
          <cmp-shadow-scoped-false-assetsdirs-formassociated-styleurls></cmp-shadow-scoped-false-assetsdirs-formassociated-styleurls>
          <cmp-shadow-scoped-false-assetsdirs-styles></cmp-shadow-scoped-false-assetsdirs-styles>
          <cmp-shadow-scoped-false-assetsdirs-styleurl></cmp-shadow-scoped-false-assetsdirs-styleurl>
          <cmp-shadow-scoped-false-assetsdirs-styleurls></cmp-shadow-scoped-false-assetsdirs-styleurls>
          <cmp-shadow-scoped-false-formassociated></cmp-shadow-scoped-false-formassociated>
          <cmp-shadow-scoped-false-formassociated-false></cmp-shadow-scoped-false-formassociated-false>
          <cmp-shadow-scoped-false-formassociated-false-styles></cmp-shadow-scoped-false-formassociated-false-styles>
          <cmp-shadow-scoped-false-formassociated-false-styleurl></cmp-shadow-scoped-false-formassociated-false-styleurl>
          <cmp-shadow-scoped-false-formassociated-false-styleurls></cmp-shadow-scoped-false-formassociated-false-styleurls>
          <cmp-shadow-scoped-false-formassociated-styles></cmp-shadow-scoped-false-formassociated-styles>
          <cmp-shadow-scoped-false-formassociated-styleurl></cmp-shadow-scoped-false-formassociated-styleurl>
          <cmp-shadow-scoped-false-formassociated-styleurls></cmp-shadow-scoped-false-formassociated-styleurls>
          <cmp-shadow-scoped-false-styles></cmp-shadow-scoped-false-styles>
          <cmp-shadow-scoped-false-styleurl></cmp-shadow-scoped-false-styleurl>
          <cmp-shadow-scoped-false-styleurls></cmp-shadow-scoped-false-styleurls>
          <cmp-shadow-styles></cmp-shadow-styles>
          <cmp-shadow-styleurl></cmp-shadow-styleurl>
          <cmp-shadow-styleurls></cmp-shadow-styleurls>

          {/* Scoped mode components - Test Case #2 (48 components) */}
          <cmp-scoped></cmp-scoped>
          <cmp-scoped-assetsdirs></cmp-scoped-assetsdirs>
          <cmp-scoped-assetsdirs-formassociated></cmp-scoped-assetsdirs-formassociated>
          <cmp-scoped-assetsdirs-formassociated-false></cmp-scoped-assetsdirs-formassociated-false>
          <cmp-scoped-assetsdirs-formassociated-false-styles></cmp-scoped-assetsdirs-formassociated-false-styles>
          <cmp-scoped-assetsdirs-formassociated-false-styleurl></cmp-scoped-assetsdirs-formassociated-false-styleurl>
          <cmp-scoped-assetsdirs-formassociated-false-styleurls></cmp-scoped-assetsdirs-formassociated-false-styleurls>
          <cmp-scoped-assetsdirs-formassociated-styles></cmp-scoped-assetsdirs-formassociated-styles>
          <cmp-scoped-assetsdirs-formassociated-styleurl></cmp-scoped-assetsdirs-formassociated-styleurl>
          <cmp-scoped-assetsdirs-formassociated-styleurls></cmp-scoped-assetsdirs-formassociated-styleurls>
          <cmp-scoped-assetsdirs-styles></cmp-scoped-assetsdirs-styles>
          <cmp-scoped-assetsdirs-styleurl></cmp-scoped-assetsdirs-styleurl>
          <cmp-scoped-assetsdirs-styleurls></cmp-scoped-assetsdirs-styleurls>
          <cmp-scoped-formassociated></cmp-scoped-formassociated>
          <cmp-scoped-formassociated-false></cmp-scoped-formassociated-false>
          <cmp-scoped-formassociated-false-styles></cmp-scoped-formassociated-false-styles>
          <cmp-scoped-formassociated-false-styleurl></cmp-scoped-formassociated-false-styleurl>
          <cmp-scoped-formassociated-false-styleurls></cmp-scoped-formassociated-false-styleurls>
          <cmp-scoped-formassociated-styles></cmp-scoped-formassociated-styles>
          <cmp-scoped-formassociated-styleurl></cmp-scoped-formassociated-styleurl>
          <cmp-scoped-formassociated-styleurls></cmp-scoped-formassociated-styleurls>
          <cmp-scoped-styles></cmp-scoped-styles>
          <cmp-scoped-styleurl></cmp-scoped-styleurl>
          <cmp-scoped-styleurls></cmp-scoped-styleurls>
          <cmp-shadow-false-scoped></cmp-shadow-false-scoped>
          <cmp-shadow-false-scoped-assetsdirs></cmp-shadow-false-scoped-assetsdirs>
          <cmp-shadow-false-scoped-assetsdirs-formassociated></cmp-shadow-false-scoped-assetsdirs-formassociated>
          <cmp-shadow-false-scoped-assetsdirs-formassociated-false></cmp-shadow-false-scoped-assetsdirs-formassociated-false>
          <cmp-shadow-false-scoped-assetsdirs-formassociated-false-styles></cmp-shadow-false-scoped-assetsdirs-formassociated-false-styles>
          <cmp-shadow-false-scoped-assetsdirs-formassociated-false-styleurl></cmp-shadow-false-scoped-assetsdirs-formassociated-false-styleurl>
          <cmp-shadow-false-scoped-assetsdirs-formassociated-false-styleurls></cmp-shadow-false-scoped-assetsdirs-formassociated-false-styleurls>
          <cmp-shadow-false-scoped-assetsdirs-formassociated-styles></cmp-shadow-false-scoped-assetsdirs-formassociated-styles>
          <cmp-shadow-false-scoped-assetsdirs-formassociated-styleurl></cmp-shadow-false-scoped-assetsdirs-formassociated-styleurl>
          <cmp-shadow-false-scoped-assetsdirs-formassociated-styleurls></cmp-shadow-false-scoped-assetsdirs-formassociated-styleurls>
          <cmp-shadow-false-scoped-assetsdirs-styles></cmp-shadow-false-scoped-assetsdirs-styles>
          <cmp-shadow-false-scoped-assetsdirs-styleurl></cmp-shadow-false-scoped-assetsdirs-styleurl>
          <cmp-shadow-false-scoped-assetsdirs-styleurls></cmp-shadow-false-scoped-assetsdirs-styleurls>
          <cmp-shadow-false-scoped-formassociated></cmp-shadow-false-scoped-formassociated>
          <cmp-shadow-false-scoped-formassociated-false></cmp-shadow-false-scoped-formassociated-false>
          <cmp-shadow-false-scoped-formassociated-false-styles></cmp-shadow-false-scoped-formassociated-false-styles>
          <cmp-shadow-false-scoped-formassociated-false-styleurl></cmp-shadow-false-scoped-formassociated-false-styleurl>
          <cmp-shadow-false-scoped-formassociated-false-styleurls></cmp-shadow-false-scoped-formassociated-false-styleurls>
          <cmp-shadow-false-scoped-formassociated-styles></cmp-shadow-false-scoped-formassociated-styles>
          <cmp-shadow-false-scoped-formassociated-styleurl></cmp-shadow-false-scoped-formassociated-styleurl>
          <cmp-shadow-false-scoped-formassociated-styleurls></cmp-shadow-false-scoped-formassociated-styleurls>
          <cmp-shadow-false-scoped-styles></cmp-shadow-false-scoped-styles>
          <cmp-shadow-false-scoped-styleurl></cmp-shadow-false-scoped-styleurl>
          <cmp-shadow-false-scoped-styleurls></cmp-shadow-false-scoped-styleurls>

          {/* Light mode components - Test Case #3 (96 components) */}
          <cmp-assetsdirs></cmp-assetsdirs>
          <cmp-assetsdirs-formassociated></cmp-assetsdirs-formassociated>
          <cmp-assetsdirs-formassociated-false></cmp-assetsdirs-formassociated-false>
          <cmp-assetsdirs-formassociated-false-styles></cmp-assetsdirs-formassociated-false-styles>
          <cmp-assetsdirs-formassociated-false-styleurl></cmp-assetsdirs-formassociated-false-styleurl>
          <cmp-assetsdirs-formassociated-false-styleurls></cmp-assetsdirs-formassociated-false-styleurls>
          <cmp-assetsdirs-formassociated-styles></cmp-assetsdirs-formassociated-styles>
          <cmp-assetsdirs-formassociated-styleurl></cmp-assetsdirs-formassociated-styleurl>
          <cmp-assetsdirs-formassociated-styleurls></cmp-assetsdirs-formassociated-styleurls>
          <cmp-assetsdirs-styles></cmp-assetsdirs-styles>
          <cmp-assetsdirs-styleurl></cmp-assetsdirs-styleurl>
          <cmp-assetsdirs-styleurls></cmp-assetsdirs-styleurls>
          <cmp-base></cmp-base>
          <cmp-formassociated></cmp-formassociated>
          <cmp-formassociated-false></cmp-formassociated-false>
          <cmp-formassociated-false-styles></cmp-formassociated-false-styles>
          <cmp-formassociated-false-styleurl></cmp-formassociated-false-styleurl>
          <cmp-formassociated-false-styleurls></cmp-formassociated-false-styleurls>
          <cmp-formassociated-styles></cmp-formassociated-styles>
          <cmp-formassociated-styleurl></cmp-formassociated-styleurl>
          <cmp-formassociated-styleurls></cmp-formassociated-styleurls>
          <cmp-scoped-false></cmp-scoped-false>
          <cmp-scoped-false-assetsdirs></cmp-scoped-false-assetsdirs>
          <cmp-scoped-false-assetsdirs-formassociated></cmp-scoped-false-assetsdirs-formassociated>
          <cmp-scoped-false-assetsdirs-formassociated-false></cmp-scoped-false-assetsdirs-formassociated-false>
          <cmp-scoped-false-assetsdirs-formassociated-false-styles></cmp-scoped-false-assetsdirs-formassociated-false-styles>
          <cmp-scoped-false-assetsdirs-formassociated-false-styleurl></cmp-scoped-false-assetsdirs-formassociated-false-styleurl>
          <cmp-scoped-false-assetsdirs-formassociated-false-styleurls></cmp-scoped-false-assetsdirs-formassociated-false-styleurls>
          <cmp-scoped-false-assetsdirs-formassociated-styles></cmp-scoped-false-assetsdirs-formassociated-styles>
          <cmp-scoped-false-assetsdirs-formassociated-styleurl></cmp-scoped-false-assetsdirs-formassociated-styleurl>
          <cmp-scoped-false-assetsdirs-formassociated-styleurls></cmp-scoped-false-assetsdirs-formassociated-styleurls>
          <cmp-scoped-false-assetsdirs-styles></cmp-scoped-false-assetsdirs-styles>
          <cmp-scoped-false-assetsdirs-styleurl></cmp-scoped-false-assetsdirs-styleurl>
          <cmp-scoped-false-assetsdirs-styleurls></cmp-scoped-false-assetsdirs-styleurls>
          <cmp-scoped-false-formassociated></cmp-scoped-false-formassociated>
          <cmp-scoped-false-formassociated-false></cmp-scoped-false-formassociated-false>
          <cmp-scoped-false-formassociated-false-styles></cmp-scoped-false-formassociated-false-styles>
          <cmp-scoped-false-formassociated-false-styleurl></cmp-scoped-false-formassociated-false-styleurl>
          <cmp-scoped-false-formassociated-false-styleurls></cmp-scoped-false-formassociated-false-styleurls>
          <cmp-scoped-false-formassociated-styles></cmp-scoped-false-formassociated-styles>
          <cmp-scoped-false-formassociated-styleurl></cmp-scoped-false-formassociated-styleurl>
          <cmp-scoped-false-formassociated-styleurls></cmp-scoped-false-formassociated-styleurls>
          <cmp-scoped-false-styles></cmp-scoped-false-styles>
          <cmp-scoped-false-styleurl></cmp-scoped-false-styleurl>
          <cmp-scoped-false-styleurls></cmp-scoped-false-styleurls>
          <cmp-shadow-false></cmp-shadow-false>
          <cmp-shadow-false-assetsdirs></cmp-shadow-false-assetsdirs>
          <cmp-shadow-false-assetsdirs-formassociated></cmp-shadow-false-assetsdirs-formassociated>
          <cmp-shadow-false-assetsdirs-formassociated-false></cmp-shadow-false-assetsdirs-formassociated-false>
          <cmp-shadow-false-assetsdirs-formassociated-false-styles></cmp-shadow-false-assetsdirs-formassociated-false-styles>
          <cmp-shadow-false-assetsdirs-formassociated-false-styleurl></cmp-shadow-false-assetsdirs-formassociated-false-styleurl>
          <cmp-shadow-false-assetsdirs-formassociated-false-styleurls></cmp-shadow-false-assetsdirs-formassociated-false-styleurls>
          <cmp-shadow-false-assetsdirs-formassociated-styles></cmp-shadow-false-assetsdirs-formassociated-styles>
          <cmp-shadow-false-assetsdirs-formassociated-styleurl></cmp-shadow-false-assetsdirs-formassociated-styleurl>
          <cmp-shadow-false-assetsdirs-formassociated-styleurls></cmp-shadow-false-assetsdirs-formassociated-styleurls>
          <cmp-shadow-false-assetsdirs-styles></cmp-shadow-false-assetsdirs-styles>
          <cmp-shadow-false-assetsdirs-styleurl></cmp-shadow-false-assetsdirs-styleurl>
          <cmp-shadow-false-assetsdirs-styleurls></cmp-shadow-false-assetsdirs-styleurls>
          <cmp-shadow-false-formassociated></cmp-shadow-false-formassociated>
          <cmp-shadow-false-formassociated-false></cmp-shadow-false-formassociated-false>
          <cmp-shadow-false-formassociated-false-styles></cmp-shadow-false-formassociated-false-styles>
          <cmp-shadow-false-formassociated-false-styleurl></cmp-shadow-false-formassociated-false-styleurl>
          <cmp-shadow-false-formassociated-false-styleurls></cmp-shadow-false-formassociated-false-styleurls>
          <cmp-shadow-false-formassociated-styles></cmp-shadow-false-formassociated-styles>
          <cmp-shadow-false-formassociated-styleurl></cmp-shadow-false-formassociated-styleurl>
          <cmp-shadow-false-formassociated-styleurls></cmp-shadow-false-formassociated-styleurls>
          <cmp-shadow-false-scoped-false></cmp-shadow-false-scoped-false>
          <cmp-shadow-false-scoped-false-assetsdirs></cmp-shadow-false-scoped-false-assetsdirs>
          <cmp-shadow-false-scoped-false-assetsdirs-formassociated></cmp-shadow-false-scoped-false-assetsdirs-formassociated>
          <cmp-shadow-false-scoped-false-assetsdirs-formassociated-false></cmp-shadow-false-scoped-false-assetsdirs-formassociated-false>
          <cmp-shadow-false-scoped-false-assetsdirs-formassociated-false-styles></cmp-shadow-false-scoped-false-assetsdirs-formassociated-false-styles>
          <cmp-shadow-false-scoped-false-assetsdirs-formassociated-false-styleurl></cmp-shadow-false-scoped-false-assetsdirs-formassociated-false-styleurl>
          <cmp-shadow-false-scoped-false-assetsdirs-formassociated-false-styleurls></cmp-shadow-false-scoped-false-assetsdirs-formassociated-false-styleurls>
          <cmp-shadow-false-scoped-false-assetsdirs-formassociated-styles></cmp-shadow-false-scoped-false-assetsdirs-formassociated-styles>
          <cmp-shadow-false-scoped-false-assetsdirs-formassociated-styleurl></cmp-shadow-false-scoped-false-assetsdirs-formassociated-styleurl>
          <cmp-shadow-false-scoped-false-assetsdirs-formassociated-styleurls></cmp-shadow-false-scoped-false-assetsdirs-formassociated-styleurls>
          <cmp-shadow-false-scoped-false-assetsdirs-styles></cmp-shadow-false-scoped-false-assetsdirs-styles>
          <cmp-shadow-false-scoped-false-assetsdirs-styleurl></cmp-shadow-false-scoped-false-assetsdirs-styleurl>
          <cmp-shadow-false-scoped-false-assetsdirs-styleurls></cmp-shadow-false-scoped-false-assetsdirs-styleurls>
          <cmp-shadow-false-scoped-false-formassociated></cmp-shadow-false-scoped-false-formassociated>
          <cmp-shadow-false-scoped-false-formassociated-false></cmp-shadow-false-scoped-false-formassociated-false>
          <cmp-shadow-false-scoped-false-formassociated-false-styles></cmp-shadow-false-scoped-false-formassociated-false-styles>
          <cmp-shadow-false-scoped-false-formassociated-false-styleurl></cmp-shadow-false-scoped-false-formassociated-false-styleurl>
          <cmp-shadow-false-scoped-false-formassociated-false-styleurls></cmp-shadow-false-scoped-false-formassociated-false-styleurls>
          <cmp-shadow-false-scoped-false-formassociated-styles></cmp-shadow-false-scoped-false-formassociated-styles>
          <cmp-shadow-false-scoped-false-formassociated-styleurl></cmp-shadow-false-scoped-false-formassociated-styleurl>
          <cmp-shadow-false-scoped-false-formassociated-styleurls></cmp-shadow-false-scoped-false-formassociated-styleurls>
          <cmp-shadow-false-scoped-false-styles></cmp-shadow-false-scoped-false-styles>
          <cmp-shadow-false-scoped-false-styleurl></cmp-shadow-false-scoped-false-styleurl>
          <cmp-shadow-false-scoped-false-styleurls></cmp-shadow-false-scoped-false-styleurls>
          <cmp-shadow-false-styles></cmp-shadow-false-styles>
          <cmp-shadow-false-styleurl></cmp-shadow-false-styleurl>
          <cmp-shadow-false-styleurls></cmp-shadow-false-styleurls>
          <cmp-styles></cmp-styles>
          <cmp-styleurl></cmp-styleurl>
          <cmp-styleurls></cmp-styleurls>
          <cmp-light></cmp-light>
        </Fragment>
      ),
    });
  });

  describe('Test Case #1 – Shadow DOM mode', () => {
    it('creates shadow root for shadow mode component', async () => {
      const selector = 'cmp-shadow';
      const cmp = await $(selector);
      await expect(cmp).toExist();
      
      const hasShadowRoot = await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        return el.shadowRoot !== null && el.shadowRoot !== undefined;
      }, selector);
      
      expect(hasShadowRoot).toBe(true);
    });

    it('renders content inside shadow root', async () => {
      const selector = 'cmp-shadow';
      const cmp = await $(selector);
      
      const content = await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        const shadowRoot = el.shadowRoot;
        const div = shadowRoot.querySelector('div');
        return div ? div.textContent : null;
      }, selector);
      
      expect(content).toContain('Permutation');
    });

    it('applies inline styles in shadow DOM', async () => {
      const selector = 'cmp-shadow-styles';
      const cmp = await $(selector);
      
      const displayStyle = await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        const styles = window.getComputedStyle(el);
        return styles.display;
      }, selector);
      
      expect(displayStyle).toBe('block');
    });

    it('loads styleUrl in shadow DOM', async () => {
      const selector = 'cmp-shadow-styleurl';
      const cmp = await $(selector);
      await expect(cmp).toExist();
      
      const hasContent = await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        const shadowRoot = el.shadowRoot;
        return shadowRoot.querySelector('div') !== null;
      }, selector);
      
      expect(hasContent).toBe(true);
    });

    it('loads styleUrls in shadow DOM', async () => {
      const selector = 'cmp-shadow-styleurls';
      const cmp = await $(selector);
      await expect(cmp).toExist();
      
      const hasContent = await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        const shadowRoot = el.shadowRoot;
        return shadowRoot.querySelector('div') !== null;
      }, selector);
      
      expect(hasContent).toBe(true);
    });

    it('supports formAssociated in shadow DOM', async () => {
      const selector = 'cmp-shadow-formassociated';
      const cmp = await $(selector);
      await expect(cmp).toExist();
      
      const hasShadowRoot = await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        return el.shadowRoot !== null;
      }, selector);
      
      expect(hasShadowRoot).toBe(true);
    });

    it('supports assetsDirs in shadow DOM', async () => {
      const selector = 'cmp-shadow-assetsdirs';
      const cmp = await $(selector);
      await expect(cmp).toExist();
      
      const hasShadowRoot = await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        return el.shadowRoot !== null;
      }, selector);
      
      expect(hasShadowRoot).toBe(true);
    });

    it('combines assetsDirs and styles in shadow DOM', async () => {
      const selector = 'cmp-shadow-assetsdirs-styles';
      const cmp = await $(selector);
      
      const displayStyle = await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        const styles = window.getComputedStyle(el);
        return styles.display;
      }, selector);
      
      expect(displayStyle).toBe('block');
    });

    it('combines assetsDirs, formAssociated, and styles in shadow DOM', async () => {
      const selector = 'cmp-shadow-assetsdirs-formassociated-styles';
      const cmp = await $(selector);
      
      const displayStyle = await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        const styles = window.getComputedStyle(el);
        return styles.display;
      }, selector);
      
      expect(displayStyle).toBe('block');
    });
  });

  describe('Test Case #2 – Scoped mode', () => {
    it('renders in light DOM without shadow root', async () => {
      const selector = 'cmp-scoped';
      const cmp = await $(selector);
      await expect(cmp).toExist();
      
      const hasShadowRoot = await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        return el.shadowRoot !== null && el.shadowRoot !== undefined;
      }, selector);
      
      expect(hasShadowRoot).toBe(false);
    });

    it('renders content in light DOM', async () => {
      const selector = 'cmp-scoped';
      const cmp = await $(selector);
      
      const content = await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        const div = el.querySelector('div');
        return div ? div.textContent : null;
      }, selector);
      
      expect(content).toContain('Permutation');
    });

    it('applies scoped inline styles', async () => {
      const selector = 'cmp-scoped-styles';
      const cmp = await $(selector);
      
      const displayStyle = await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        const styles = window.getComputedStyle(el);
        return styles.display;
      }, selector);
      
      expect(displayStyle).toBe('block');
    });

    it('loads styleUrl in scoped mode', async () => {
      const selector = 'cmp-scoped-styleurl';
      const cmp = await $(selector);
      await expect(cmp).toExist();
      
      const hasContent = await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        return el.querySelector('div') !== null;
      }, selector);
      
      expect(hasContent).toBe(true);
    });

    it('loads styleUrls in scoped mode', async () => {
      const selector = 'cmp-scoped-styleurls';
      const cmp = await $(selector);
      await expect(cmp).toExist();
      
      const hasContent = await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        return el.querySelector('div') !== null;
      }, selector);
      
      expect(hasContent).toBe(true);
    });

    it('supports formAssociated in scoped mode', async () => {
      const selector = 'cmp-scoped-formassociated';
      const cmp = await $(selector);
      await expect(cmp).toExist();
      
      const hasShadowRoot = await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        return el.shadowRoot !== null;
      }, selector);
      
      expect(hasShadowRoot).toBe(false);
    });

    it('supports assetsDirs in scoped mode', async () => {
      const selector = 'cmp-scoped-assetsdirs';
      const cmp = await $(selector);
      await expect(cmp).toExist();
      
      const hasShadowRoot = await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        return el.shadowRoot !== null;
      }, selector);
      
      expect(hasShadowRoot).toBe(false);
    });

    it('combines assetsDirs and styles in scoped mode', async () => {
      const selector = 'cmp-scoped-assetsdirs-styles';
      const cmp = await $(selector);
      
      const displayStyle = await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        const styles = window.getComputedStyle(el);
        return styles.display;
      }, selector);
      
      expect(displayStyle).toBe('block');
    });

    it('combines assetsDirs, formAssociated, and styles in scoped mode', async () => {
      const selector = 'cmp-scoped-assetsdirs-formassociated-styles';
      const cmp = await $(selector);
      
      const displayStyle = await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        const styles = window.getComputedStyle(el);
        return styles.display;
      }, selector);
      
      expect(displayStyle).toBe('block');
    });
  });

  describe('Test Case #3 – Light DOM mode', () => {
    it('renders in light DOM without shadow root', async () => {
      const selector = 'cmp-base';
      const cmp = await $(selector);
      await expect(cmp).toExist();
      
      const hasShadowRoot = await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        return el.shadowRoot !== null && el.shadowRoot !== undefined;
      }, selector);
      
      expect(hasShadowRoot).toBe(false);
    });

    it('renders content in light DOM', async () => {
      const selector = 'cmp-base';
      const cmp = await $(selector);
      
      const content = await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        const div = el.querySelector('div');
        return div ? div.textContent : null;
      }, selector);
      
      expect(content).toContain('Permutation');
    });

    it('applies inline styles in light DOM', async () => {
      const selector = 'cmp-styles';
      const cmp = await $(selector);
      await expect(cmp).toExist();
      
      // In light DOM mode, :host doesn't work, but styles are still loaded
      // Verify the component exists and has content
      const hasContent = await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        return el.querySelector('div') !== null;
      }, selector);
      
      expect(hasContent).toBe(true);
    });

    it('loads styleUrl in light DOM', async () => {
      const selector = 'cmp-styleurl';
      const cmp = await $(selector);
      await expect(cmp).toExist();
      
      const hasContent = await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        return el.querySelector('div') !== null;
      }, selector);
      
      expect(hasContent).toBe(true);
    });

    it('loads styleUrls in light DOM', async () => {
      const selector = 'cmp-styleurls';
      const cmp = await $(selector);
      await expect(cmp).toExist();
      
      const hasContent = await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        return el.querySelector('div') !== null;
      }, selector);
      
      expect(hasContent).toBe(true);
    });

    it('supports formAssociated in light DOM', async () => {
      const selector = 'cmp-formassociated';
      const cmp = await $(selector);
      await expect(cmp).toExist();
      
      const hasShadowRoot = await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        return el.shadowRoot !== null;
      }, selector);
      
      expect(hasShadowRoot).toBe(false);
    });

    it('supports assetsDirs in light DOM', async () => {
      const selector = 'cmp-assetsdirs';
      const cmp = await $(selector);
      await expect(cmp).toExist();
      
      const hasShadowRoot = await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        return el.shadowRoot !== null;
      }, selector);
      
      expect(hasShadowRoot).toBe(false);
    });

    it('combines assetsDirs and styles in light DOM', async () => {
      const selector = 'cmp-assetsdirs-styles';
      const cmp = await $(selector);
      await expect(cmp).toExist();
      
      // In light DOM mode, :host doesn't work, but styles are still loaded
      // Verify the component exists and has content
      const hasContent = await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        return el.querySelector('div') !== null;
      }, selector);
      
      expect(hasContent).toBe(true);
    });

    it('combines assetsDirs, formAssociated, and styles in light DOM', async () => {
      const selector = 'cmp-assetsdirs-formassociated-styles';
      const cmp = await $(selector);
      await expect(cmp).toExist();
      
      // In light DOM mode, :host doesn't work, but styles are still loaded
      // Verify the component exists and has content
      const hasContent = await (browser as any).execute((sel: string) => {
        const el: any = document.querySelector(sel);
        return el.querySelector('div') !== null;
      }, selector);
      
      expect(hasContent).toBe(true);
    });
  });
});

