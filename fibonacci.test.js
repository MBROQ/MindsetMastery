const Fibonacci = require('./fibonacci');

let fibonacci;

beforeEach(() => {
    fibonacci = new Fibonacci();
});
//Positive tests
test('When initialized "2" the next number to show', () => {
    fibonacci.init(2);
    expect(fibonacci.next()).toBe(3);
});

test('When initialized "13" the next number to show ', () => {
    fibonacci.init(13);
    expect(fibonacci.next()).toBe(21);

})

test('When initialized "1" the next number to show', () => {
    fibonacci.init(1);
    expect(fibonacci.next()).toBe(1);

})


test('When initialized "1" skip forward', () => {
    fibonacci.init(1);
    expect(fibonacci.skip()).toBe(1);

})

test('Initialized at "3" Condition added to next function', () => {
    fibonacci.init(3);
    expect(fibonacci.next()).toBe(5);

})

test('Initialized at "3" skip "8"', () => {
    fibonacci.init(3);
    expect(fibonacci.skip(8)).toBe(144);

})

test('Move on one number from default seed', () => {

    expect(fibonacci.next()).toBe(1);

})

test('Send 4 "next"', () => {
fibonacci.next();
fibonacci.next();
fibonacci.next();
    
expect(fibonacci.next()).toBe(5);

})

test('When Initialized "21" next number to show with next condition "8"', () => {
    fibonacci.init(21);
    expect(fibonacci.next(8)).toBe(34);

})

test('When Next "-8" test will throw', () => {
   
    expect( () => {fibonacci.next(-8)} ).toThrow();

})
//Error tests
test('When skip -3 to throw', () => {
    
    expect(  () =>   { fibonacci.skip     (-3) }).toThrow();

})

test('When Initialized "-1" skip to throw', () => {
    
    expect(  () => { fibonacci.init(-1) }  ).toThrow();

});