const functions = require('./functions');

// toBe
test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).toBe(4);
});

// not toBe
test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treat as true
// toBeFalsy matches anything that an if statement treat as false

// toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// toBeFalsy
test('User should be Agustin Ramunno object', () => {
  expect(functions.createUser()).toStrictEqual({
    firstName: 'Agustin',
    lastName: 'Ramunno',
  });
});
