function findMatching(drivers , str ){
    return drivers.filter((element) => element.toLowerCase() ===str.toLowerCase())
}

function fuzzyMatch(drivers , str){
    return drivers.filter((element) => element.slice(0,str.length) === str)
}

function matchName (drivers , str){
        return drivers.filter((element) => element.name === str)
}
