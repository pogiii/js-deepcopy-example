function deepCopy(obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);

    const newObj = {};


    for (let i = 0; i < keys.length; i++) {

        if (typeof values[i] == 'object') {

            if (obj == values[i]) {
                newObj[keys[i]] = newObj;
                continue;
            }

            values[i] = deepCopy(values[i]);
        }

        newObj[keys[i]] = values[i];

    }

    return newObj;
};

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

// create circular
base.e = base;

const clone = deepCopy(base);

// check for deep clone
clone.d.skills.primary = 'drawing';
console.log(base);
console.log(clone)