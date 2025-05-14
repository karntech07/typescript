function pickProperty<U extends object, V extends keyof U>(obj: U, key: V) {
    return obj[key];
}

console.log(pickProperty({name: 'karan', age: 23}, 'age'));
