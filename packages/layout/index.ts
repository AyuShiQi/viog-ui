import type { App } from 'vue'

import row from './src/row.vue'
import col from './src/col.vue'
import grid from './src/grid.vue'

export default {
  install (app: App) {
    app.component(row.name, row)
    app.component(col.name, col)
    app.component(grid.name, grid)
  }
}

export {
  row,
  col,
  grid
}
