// Your code here


function mapToNegativize(a){
    for (let i = 0; i < a.length; i++){
        a[i] = a[i] * -1
    }
    return a
}

function mapToNoChange(a){
    return a
}

function mapToDouble(a){
    for (let i = 0; i < a.length; i++){
        a[i] = a[i] * 2
    }
    return a
}

function mapToSquare(a){
    for (let i = 0; i < a.length; i++){
        a[i] = a[i] ** 2
    }
    return a
}

function reduceToTotal(a, start = 0){
    for (let num of a){
        start += num
    }
    return start
}

function reduceToAllTrue(a){
    let allTrue = true
    for (let b of a){
        if (b == false){
            allTrue = false
        }
    }
    return allTrue
}

function reduceToAnyTrue(a){
    let anyTrue = false

    for (let b of a){
        if (b == true){
            anyTrue = true
        }
    }
    return anyTrue
}
