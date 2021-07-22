function findMatching(array, string){
    const matchName = array.filter(function(element){
        return string.toLowerCase() === element.toLowerCase()
    })
        return matchName
}

function fuzzyMatch(array, string){
    const closeMatch = array.filter(function(element){
        return string.substring(0,1) === element.substring(0,1)
    })
        return closeMatch
}


function matchName(array, string){
    const matching = array.filter(function(element){
        return string === element.name
    })
    return matching
}



