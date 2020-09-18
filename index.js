'use strict'

const getNodeContent = (obj, key) => {
  if(typeof obj[key] === "undefined"){
    throw "undefined"
  }else{
    return obj[key]
  }
}

const keyDiff = (obj1, obj2, keys) => {
  const result = { }
  if(typeof keys === "string"){
    keys = [ keys ]
  }
  keys.forEach((val, index) => {
    const keyPaths = val.split(".")
    let currentNode1 = obj1, currentNode2 = obj2
    let reached = false
    for(let i=0; i<keyPaths.length; i++){
      try{
        currentNode1 = getNodeContent(currentNode1, keyPaths[i])
        currentNode2 = getNodeContent(currentNode2, keyPaths[i])
      }catch{
        break;
      }
      if(i === keyPaths.length - 1){
        reached = true
      }
    }
    if(!reached){
      result[val] = true
    }else{
      result[val] = currentNode1 !== currentNode2
    }
  })
  return result
}

module.exports = keyDiff