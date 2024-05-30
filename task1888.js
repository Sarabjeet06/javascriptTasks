const assertObjectsEqual = (actual, expected, str) => {
    return JSON.stringify(actual) === JSON.stringify(expected);
    // iteration, in single level
}


let actual = { foo: 5, bar: 6 };
let expected = { foo: 5, bar: 6 };

if (assertObjectsEqual(actual, { foo: 5, bar: 6 }, "detacts that two objects are equal")) {
    console.log("passed");
} else {
    console.log(`FAILED Expected ${expected}, but got ${actual}`);
}