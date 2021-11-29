function deepCopy(obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);

    const newObj = {};


    for (let i = 0; i < keys.length; i++) {

        if (typeof values[i] == 'object') {
            values[i] = deepCopy(values[i]);
        }

        newObj[keys[i]] = values[i];

    }

    return newObj;
}

const base = {
    a: 'b',
    b: 'c',
    c: function () { return this.a },
    d: {
        skills: {
            primary: 'code',
            secondary: 'breath'
        }
    }
};

const newObj = deepCopy(base);

base.d.skills.primary = 'drawings';

console.log(base);
console.log(newObj);
