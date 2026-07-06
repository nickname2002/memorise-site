import type { Preview } from '@storybook/vue3-vite'

import '../src/styles/colors_and_type.css'
import '../src/styles/ui-kit.css'
import '../src/styles/landing.css'
import '../src/styles/buttons.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
