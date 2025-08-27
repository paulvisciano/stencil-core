import type { Preview } from '@storybook/react-vite'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Testing',['Overview', 'Core Tests', 'Component Tests', 'E2E Tests', 'Roadmap', 'Decorators',['Overview', 'Matrix Generation', '@Component', '@Prop', '@State']]],
      },
    },
  },
};

export default preview;