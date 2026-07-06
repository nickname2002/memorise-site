/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.js'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  staticDirs: ['../public'],
};

export default config;
