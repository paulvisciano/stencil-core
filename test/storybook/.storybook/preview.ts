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
        order: ['Testing',['Overview', 'Project Config', 'Coverage Matrix',['Overview', 'Config','Generation', 'Verification'], 'Tests', ['Core', 'Component', 'E2E'], 'Roadmap', 'Decorators',['Overview', 'Matrix Generation', '@Component', '@Prop', '@State']]],
      },
    },
  },
};

export default preview;