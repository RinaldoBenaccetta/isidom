module.exports = {
  verbose: true,
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    '!**/*.experiment.js',
    '**/*.js',
    '!**/test/fixtures/**/*.js',
    '!**/test/coverage/**/*.js',
    '!/node_modules/',
    '!**/*.config.js'
  ],
  coverageDirectory: 'src/test/coverage'
}
