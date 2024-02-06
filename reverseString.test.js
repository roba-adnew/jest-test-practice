const reverseString = require('./reverseString.js');

test('reverse reverse to get esrever', () => {
    expect(reverseString('reverse')).toBe('esrever')
});

test('reverse the word palindrome to get emordnilap', () => {
    expect(reverseString('palindrome')).toBe('emordnilap')
});

test('reverse rotator to get rotator', () => {
    expect(reverseString('rotator')).toBe('rotator');
})

