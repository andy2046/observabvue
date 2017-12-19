# observabvue
vanilla JavaScript implementation of Observer pattern.

## Examples
```js
import { Observer, Subject } from 'observabvue';

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
// obs1 undefined
// obs2 undefined

console.log('sub1', sub1.data)
console.log('sub2', sub2.data)
// sub1 null
// sub2 null

sub1.unregisterObserver(obs1)
sub1.data = {'1': 1}
// obs2 { '1': 1 }

console.log('sub1', sub1.data)
console.log('sub2', sub2.data)
// sub1 { '1': 1 }
// sub2 null
```

## Installation

```
npm install --save observabvue
```

## Usage
You can import from `observabvue`:

```js
import { Observer, Subject } from 'observabvue';
// or
const { Observer, Subject } = require('observabvue');
```
