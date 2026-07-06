import SvgIcon from './SvgIcon.vue'
import IconSprite from './IconSprite.vue'

const ICON_NAMES = [
  'i-brush',
  'i-folder',
  'i-keyboard',
  'i-note',
  'i-pencil',
  'i-refresh',
  'i-search',
  'i-shield',
  'i-tag',
  'i-download',
  'i-check',
]

export default {
  title: 'UI/Icons/SvgIcon',
  component: SvgIcon,
  decorators: [
    () => ({
      components: { IconSprite },
      template: '<div><IconSprite /><story /></div>',
    }),
  ],
}

export const Single = {
  args: { name: 'i-check' },
  render: (args) => ({
    components: { SvgIcon },
    setup: () => ({ args }),
    template: '<SvgIcon v-bind="args" style="width: 24px; height: 24px;" />',
  }),
}

export const AllIcons = {
  render: () => ({
    components: { SvgIcon },
    setup: () => ({ names: ICON_NAMES }),
    template: `
      <div style="display: flex; gap: 20px; flex-wrap: wrap;">
        <div v-for="name in names" :key="name" style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
          <SvgIcon :name="name" style="width: 24px; height: 24px;" />
          <code style="font-size: 11px;">{{ name }}</code>
        </div>
      </div>
    `,
  }),
}
