// Write a generic function called mergeObjects that takes two objects and merges them into one

function mergeObjects<U, V>(ob1: U, ob2: V): U & V {
    return  {
        ...ob1,
        ...ob2
    }
}

type p1 = {
    name: string,
    age: number
}

type p2 = {
    education: string
}

const obj1 = {
    name: 'karan',
    age: 23
};

const obj2 = {
    education: 'Btech'
}

console.log(mergeObjects<p1, p2>(obj1, obj2))

