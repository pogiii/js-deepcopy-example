const base = {
    a: 'b',
    b: 'c',
    c: function () { return this.a }
};

const keys = Object.keys(base);
const values = Object.values(base);

const newObj = {};


for (let i = 0; i < keys.length; i++) {

    newObj[keys[i]] = values[i];

}

function changeA(obj, newVal) {
    obj.a = newVal;

    return obj
}

changeA(newObj, 'Deep');


console.log(base.c());
console.log(newObj.c()); // Deep Clone!