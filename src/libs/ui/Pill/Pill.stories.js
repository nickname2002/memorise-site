import Pill from './Pill.vue'

export default {
  title: 'UI/Pill',
  component: Pill,
  decorators: [
    () => ({ template: '<div style="background: var(--night-950); padding: 48px;"><story /></div>' }),
  ],
}

export const Default = {
  render: () => ({
    components: { Pill },
    template: '<Pill>Now in private beta</Pill>',
  }),
}
