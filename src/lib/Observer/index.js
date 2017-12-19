const Observer = (function () {
  class Observer {
    constructor (notifyFunc) {
      if (typeof notifyFunc !== 'function') {
        throw new TypeError('Expected notifyFunc to be function')
      }
      this.notify = notifyFunc
    }
  }

  Object.defineProperty(Observer, 'of', {
    value: function (notifyFunc) {
      return new Observer(notifyFunc)
    },
    writable: false,
    enumerable: true,
    configurable: false
  })

  return Observer
})()

module.exports = Observer
