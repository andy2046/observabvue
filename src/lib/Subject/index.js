const Observer = require('../Observer')

const Subject = (function () {
  const data = new WeakMap()

  class Subject {
    constructor () {
      this.observerCollection = []
      data.set(this, null)

      Object.defineProperty(this, 'data', {
        get: function () { return data.get(this) },
        set: function (value) {
          data.set(this, value)
          this.notifyObservers(data.get(this))
        }
      })
    }

    registerObserver (observer) {
      if (!(observer instanceof Observer)) {
        throw new TypeError('Expected Observer instance')
      }
      this.observerCollection.push(observer)
    }

    unregisterObserver (observer) {
      if (!(observer instanceof Observer)) {
        throw new TypeError('Expected Observer instance')
      }
      const index = this.observerCollection.indexOf(observer)
      this.observerCollection.splice(index, 1)
    }

    notifyObservers (data) {
      for (let observer of this.observerCollection) {
        observer.notify(data)
      }
    }
  }

  Object.defineProperty(Subject, 'of', {
    value: function () {
      return new Subject()
    },
    writable: false,
    enumerable: true,
    configurable: false
  })

  return Subject
})()

module.exports = Subject
