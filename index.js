'use strict'

const getNodeContent = (obj, key) => {
  if(typeof obj[key] === "undefined"){
    throw "undefined"
  }else{
    return obj[key]
  }
}

const keysDiff = (obj1, obj2, keys) => {
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
      }catch{
        currentNode1 = undefined
      }
      try{
        currentNode2 = getNodeContent(currentNode2, keyPaths[i])
      }catch{
        currentNode2 = undefined
      }
      if(currentNode1 === undefined && currentNode2 === undefined){
        break;
      }
      if(i === keyPaths.length - 1){
        reached = true
      }
    }
    result[val] = {
      value1: currentNode1,
      value2: currentNode2,
    }
    if(!reached){
      result[val].different = true
    }else{
      result[val].different = currentNode1 !== currentNode2
    }
  })
  return result
}

module.exports = keysDiff