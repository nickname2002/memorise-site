import OsGlyph from './OsGlyph.vue'

export default {
  title: 'UI/Icons/OsGlyph',
  component: OsGlyph,
  argTypes: {
    os: { control: 'select', options: ['apple', 'windows', 'linux'] },
  },
}

export const Apple = { args: { os: 'apple' } }

export const Windows = { args: { os: 'windows' } }

export const Linux = { args: { os: 'linux' } }
