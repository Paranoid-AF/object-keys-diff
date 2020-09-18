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
*/
console.log(keysDiff(object1, object2, ["name", "properties.computer.ramByGigabyte"])) // { name: true, 'properties.computer.ramByGigabyte': false }

/* A single string is also accepted. */
console.log(keysDiff(object1, object2, "properties.phone")) // { 'properties.phone': true }

/* true when a key is not existing in any of the objects. */
console.log(keysDiff(object1, object2, "properties.phone.ramByGigabyte")) // { 'properties.phone.ramByGigabyte': true }

```
