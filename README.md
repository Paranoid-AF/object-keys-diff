# object-keys-diff
A node module that compares multiple designated keys' value in two objects.
Instead of traversing the whole object, this module does a very simple task: visit only the keys that you provided.

# Usage
```javascript
const object1 = {
  name: "Alex",
  properties: {
    phone: "Super Duper Phone",
    computer: {
      processor: "2.3GHz",
      ramByGigabyte: 8
    }
  }
}

const object2 = {
  name: "Sarah",
  properties: {
    phone: "Phones for Normies",
    computer: {
      processor: "2.1GHz",
      ramByGigabyte: 8
    }
  }
}

const keysDiff = require('object-keys-diff')

/* 
  true means different, false means the value is the same or non-existing in one object.
  You could input an array. Key names in path should be divided with dots.
  
  @return
  {
    name: { value1: 'Alex', value2: 'Sarah', different: true },
    'properties.computer.ramByGigabyte': { value1: 8, value2: 8, different: false }
  }
*/
console.log(keysDiff(object1, object2, ["name", "properties.computer.ramByGigabyte"]))

/*
  A single string is also accepted.

  @return
  {
    'properties.phone': {
      value1: 'Super Duper Phone',
      value2: 'Phones for Normies',
      different: true
    }
  }
*/
console.log(keysDiff(object1, object2, "properties.phone"))
/*
  true when a key is not existing in any of the objects.

  @return
  {
    'properties.phone.ramByGigabyte': { value1: undefined, value2: undefined, different: true }
  }
*/
console.log(keysDiff(object1, object2, "properties.phone.ramByGigabyte"))

```
