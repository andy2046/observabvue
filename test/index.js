const { Observer, Subject } = require('../dist')

const obs1 = Observer.of((data) => {
  console.log('obs1', data)
})

const obs2 = Observer.of((data) => {
  console.log('obs2', data)
})

const sub1 = Subject.of()
const sub2 = Subject.of()

sub1.registerObserver(obs1)
sub1.registerObserver(obs2)
sub1.notifyObservers()

console.log('sub1', sub1.data)
console.log('sub2', sub2.data)

sub1.unregisterObserver(obs1)
sub1.data = {'1': 1}

console.log('sub1', sub1.data)
console.log('sub2', sub2.data)
