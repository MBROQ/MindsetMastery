const Fibonacci = require('./fibonacci');

let fibonacci;

beforeEach(() => {
    fibonacci = new Fibonacci();
});

test('When initialized "2" the next number to show', () => {
    fibonacci.init(2);
    expect(fibonacci.next()).toBe(3);
});

test('When initialized "13" the next number to show ', () => {
    fibonacci.init(13);
    expect(fibonacci.next()).toBe(21);

})

test('When initialized "0" the next number to show', () => {
    fibonacci.init(0);
    expect(fibonacci.next()).toBe(1);

})

test('When initialized "1" skip forward', () => {
    fibonacci.init(1);
    expect(fibonacci.skip()).toBe(2);

})

test('Initialized at "3" Condition added to next function', () => {
    fibonacci.init(3);
    expect(fibonacci.next(8)).toBe(5);

})

test('Initialized at "3" skip "8"', () => {
    fibonacci.init(3);
    expect(fibonacci.skip(8)).toBe(233);

})

test('No function in "init"', () => {

    expect(fibonacci.next()).toBe(1);

})

test('When Initialized "21" next number to show with next condition "8"', () => {
    fibonacci.init(21);
    expect(fibonacci.next(8)).toBe(34);

})

test('When Initialized "-1" test will throw', () => {
    fibonacci.init(-1);
    expect(fibonacci.next(8)).toThrow();

});

test('When Initialized "8" skip "-3" to throw', () => {
    fibonacci.init(8);
    expect(fibonacci.skip(-3)).toThrow();

});