import ViogUI from 'viog-ui'
import 'viog-ui/dist/viog-ui.css'
import { defineClientConfig } from '@vuepress/client'
import codeShow from './comps/codeShow.vue'
import row from './comps/row.vue'
import card from './comps/card.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(ViogUI)
    app.component('codeShow', codeShow)
    app.component('row', row)
    app.component('card', card)
  },
  setup() {},
  rootComponents: [],
})