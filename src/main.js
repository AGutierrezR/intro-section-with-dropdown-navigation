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

  dropdown: {
    [':class']() {
      return this.open ? 'open' : '';
    }
  },

  trigger: {
    ['@click']() {
      this.open = !this.open
    },
  },

  close(focusAfter) {
    this.open = false

    focusAfter && focusAfter.focus()
  },
}))

Alpine.start()
