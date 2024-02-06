const capitalize = require('./capitalize')

test('capitalize the word capitalize', () => {
    expect(capitalize('capitalize')).toBe('Capitalize')
});

test('dont do anything to Trust', () => {
    expect(capitalize('Trust')).toBe('Trust')
});