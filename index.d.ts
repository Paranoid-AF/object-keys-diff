/**
Compares multiple designated key's value in two objects.

@example
```
const keysDiff = require('object-keys-diff')
let keyArr = ["parent"]
keyArr.push("properties.title.text")
// keyArr = ["parent", "properties.title.text"]

keysDiff(obj1, obj2, keyArr)
```
*/

declare function keysDiff(object1: object, object2: object, keys: Array<string> | string): object

export = keysDiff
