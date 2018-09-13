const add = (a, b) => a + b;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}.`;

test('Should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);

    // if(result !== 7) {
    //     throw new Error(`Added 4 and 3. Result was ${result}`);
    // }
});

test('Test greeting generated from name', () => {
    const result = generateGreeting('Bill');
    expect(result).toBe("Hello Bill.");
});

test('Should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe("Hello Anonymous.");
});