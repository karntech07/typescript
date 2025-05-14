function pickProperty(obj, key) {
    return obj[key];
}
console.log(pickProperty({ name: 'karan', age: 23 }, 'name'));
