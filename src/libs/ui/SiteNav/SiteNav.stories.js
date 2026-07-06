import SiteNav from './SiteNav.vue'

export default {
  title: 'UI/SiteNav',
  component: SiteNav,
  parameters: { layout: 'fullscreen' },
}

export const OnNight = {
  args: { solid: false },
  render: (args) => ({
    components: { SiteNav },
    setup: () => ({ args }),
    template: '<div style="height: 120px; background: var(--night-950);"><SiteNav v-bind="args" /></div>',
  }),
}

export const Solid = {
  args: { solid: true },
  render: (args) => ({
    components: { SiteNav },
    setup: () => ({ args }),
    template: '<div style="height: 120px;"><SiteNav v-bind="args" /></div>',
  }),
}
