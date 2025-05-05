const {defaults: tsjPreset} = require('ts-jest/presets');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  setupFiles: ['./tests/setup.js'],
  setupFilesAfterEnv: ['./jest-setup.ts'],
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
        diagnostics: false
      },
    ],
  },
  moduleNameMapper: {
    '\\.svg': '<rootDir>/tests/__mocks__/svgMock.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx','!**/*.stories.{js,jsx,ts,tsx}', '!src/navigation/**.{js,jsx,ts,tsx}'],
};
