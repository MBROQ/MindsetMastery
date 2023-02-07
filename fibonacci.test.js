const Fibonacci = require('./fibonacci');

let fibonacci;

beforeEach(() => {
    fibonacci = new Fibonacci();
});

test('When initialized the next number can be returned', () => {
    fibonacci.init(2);
    expect(fibonacci.next()).toBe(3);
});

test('When initialized the next number can be returned', () => {
    fibonacci.init(13);
    expect(fibonacci.next()).toBe(21);

})

test('When initialized the next number can be returned', () => {
    fibonacci.init(0);
    expect(fibonacci.next()).toBe(1);

})

test('When initialized skip forward', () => {
    fibonacci.init(1);
    expect(fibonacci.skip()).toBe(2);

})

test('When initialized skip forward', () => {
    fibonacci.init(3);
    expect(fibonacci.next(8)).toBe(5);

})

test('When initialized skip forward', () => {
    fibonacci.init(3);
    expect(fibonacci.skip(8)).toBe(233);

})

test('When initialized skip forward', () => {
    fibonacci.init();
    expect(fibonacci.next()).toBe(1);

})