/**
Compares multiple designated key's value in two objects.

@returns
{
  key1: true,
  key2: false,
  ...
}

@example
```
const keyDiff = require('object-keys-diff')
let keyArr = ["parent"]
keyArr.push("properties.title.text")
// keyArr = ["parent", "properties.title.text"]

keyDiff(obj1, obj2, keyArr)
```
*/

declare function keysDiff(object1: object, object2: object, keys: Array<string>): object

export = keysDiff
