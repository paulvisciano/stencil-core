import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../docs/**/*.mdx",
    "../../../.ai/testing/**/*.mdx"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  /**
   * Add this viteFinal function to configure the base path for production builds.
   */
  async viteFinal(config, { configType }) {
    // Set the base path only for production builds.
    if (configType === 'PRODUCTION') {
      config.base = '/stencil-core/';
    }
    return config;
  },
};  
export default config;