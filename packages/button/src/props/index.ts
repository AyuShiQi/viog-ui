export default {
  color: {
    type: String,
    default: 'grey',
    validator (value: string): boolean {
      const colors = ['black', 'grey', 'purple', 'red', 'green', 'yellow', 'pink', 'blue', 'sgrey', 'spurple', 'sred', 'sgreen', 'syellow', 'spink', 'sblue']
      // The value must match one of these strings
      if (colors.includes(value)) return true
      else {
        console.error('[viog] color=' + value)
        console.error('[viog]button: 你应该为color参数传入[grey/black/purple/red/green/yellow/pink/blue/sgrey/spurple/sred/sgreen/syellow/spink/sblue]中的一个值')
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
        console.error('[viog]button: 你应该为type参数传入[plain/transparent]中的一个值')
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
  small: {
    type: Boolean,
    default: false,
    validator (value: boolean): boolean {
      const radius = [true, false]
      // The value must match one of these strings
      if (radius.includes(value)) return true
      else {
        console.error('[viog]button: 你应该为small参数传入一个布尔值')
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
  }
}
