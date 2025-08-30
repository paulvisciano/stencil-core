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
        order: ['Testing',['Overview', 'Project Config', 'Core Tests', 'Component Tests', 'E2E Tests','Coverage Matrix',['Overview', 'Config','Generation', 'Verification'], 'Roadmap', 'Decorators',['Overview', 'Matrix Generation', '@Component', '@Prop', '@State']]],
      },
    },
  },
};

export default preview;