import './styles.css'
import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.data('flyout', () => ({
  open: false,

  toggle() {
    this.open = !this.open
  },
}))


Alpine.data('dropdown', () => ({
  open: false,

  close(focusAfter) {
    this.open = false

    focusAfter && focusAfter.focus()
  },

  trigger: {
    ['@click']() {
      this.open = !this.open
    },
  },

  menuContainer: {
    [':class']() {
      return this.open ? 'visible' : 'invisible'
    }
  },

  menuInner: {
    [':class']() {
      return this.open ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
    }
  }
}))

Alpine.start()
