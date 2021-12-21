
module.exports = {
    roots: ["<rootDir>"],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?(x)',
    moduleFileExtensions: ['ts', 'js', 'json', 'node', 'tsx'],
    collectCoverage: true,
    clearMocks: true,
    coverageDirectory: "coverage",
}