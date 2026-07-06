import type { Meta, StoryObj } from '@storybook/vue3-vite'
import SiteNav from './SiteNav.vue'

const meta: Meta<typeof SiteNav> = {
  title: 'UI/SiteNav',
  component: SiteNav,
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj<typeof SiteNav>

export const OnNight: Story = {
  args: { solid: false },
  render: (args) => ({
    components: { SiteNav },
    setup: () => ({ args }),
    template: '<div style="height: 120px; background: var(--night-950);"><SiteNav v-bind="args" /></div>',
  }),
}

export const Solid: Story = {
  args: { solid: true },
  render: (args) => ({
    components: { SiteNav },
    setup: () => ({ args }),
    template: '<div style="height: 120px;"><SiteNav v-bind="args" /></div>',
  }),
}
