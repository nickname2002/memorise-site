import Starfield from './Starfield.vue'

export default {
  title: 'UI/Starfield',
  component: Starfield,
  argTypes: {
    density: { control: { type: 'range', min: 0.2, max: 2, step: 0.1 } },
    constellation: { control: 'boolean' },
  },
  decorators: [
    () => ({
      template:
        '<div style="position: relative; height: 360px; background: var(--night-950); overflow: hidden;"><story /></div>',
    }),
  ],
}

export const Default = { args: { density: 1, constellation: false } }

export const WithConstellation = { args: { density: 1, constellation: true } }
