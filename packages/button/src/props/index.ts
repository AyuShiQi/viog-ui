export default {
  color: {
    type: String,
    default: 'default',
    validator (value: string): boolean {
      const colors = ['default', 'purple', 'red', 'green', 'yellow', 'pink', 'blue', 'dark']
      // The value must match one of these strings
      if (colors.includes(value)) return true
      else {
        console.error('[viog] color=' + value)
        console.error('[viog]button: 你应该为color参数传入[default/black/purple/red/green/yellow/pink/blue/dark]中的一个值')
        return false
      }
    }
  },
  type: {
    type: String,
    default: 'default',
    validator (value: string): boolean {
      const types = ['default', 'plain', 'transparent']
      // The value must match one of these strings
      if (types.includes(value)) return true
      else {
        console.error('[viog]button: 你应该为type参数传入[default/plain/transparent]中的一个值')
        return false
      }
    }
  },
  radius: {
    type: String,
    default: 'default',
    validator (value: string): boolean {
      const radius = ['default', 'round', 'circle']
      // The value must match one of these strings
      if (radius.includes(value)) return true
      else {
        console.error('[viog]button: 你应该为radius参数传入[round/circle]中的一个值')
        return false
      }
    }
  },
  size: {
    type: String,
    default: 'middle',
    validator (value: string): boolean {
      const radius = ['small', 'middle', 'big']
      // The value must match one of these strings
      if (radius.includes(value)) return true
      else {
        console.error('[viog]button: 你应该为size参数传入[small/middle/big]其中一个值')
        return false
      }
    }
  },
  disabled: {
    type: Boolean,
    default: false,
    validator (value: boolean): boolean {
      const radius = [true, false]
      // The value must match one of these strings
      if (radius.includes(value)) return true
      else {
        console.error('[viog]button: 你应该为disabled参数传入一个布尔值')
        return false
      }
    }
  },
  mutate: {
    type: Boolean,
    default: false
  }
}
