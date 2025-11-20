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
});

